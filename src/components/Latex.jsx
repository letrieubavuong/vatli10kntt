import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Hàm helper để render chữ thường xen kẽ inline LaTeX và bold text
export function renderTextWithMath(text) {
  if (!text) return null;

  // Regex tìm **bold** hoặc $inline math$
  const regex = /\*\*([\s\S]+?)\*\*|\$([\s\S]+?)\$/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const textBefore = text.substring(lastIndex, match.index);
    if (textBefore) {
      parts.push({ content: textBefore, type: 'text' });
    }

    const boldText = match[1];
    const mathText = match[2];

    if (boldText !== undefined) {
      parts.push({ content: boldText, type: 'bold' });
    } else if (mathText !== undefined) {
      parts.push({ content: mathText, type: 'math' });
    }

    lastIndex = regex.lastIndex;
  }

  const textAfter = text.substring(lastIndex);
  if (textAfter) {
    parts.push({ content: textAfter, type: 'text' });
  }

  return parts.map((part, index) => {
    if (part.type === 'bold') {
      return <strong key={index} style={{ fontWeight: '700', color: 'var(--text-bright)' }}>{part.content}</strong>;
    } else if (part.type === 'math') {
      try {
        const html = katex.renderToString(part.content, {
          displayMode: false,
          throwOnError: false,
        });
        return (
          <span
            key={index}
            className="latex-inline"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch (e) {
        return <code key={index} className="math-error">{part.content}</code>;
      }
    } else {
      return part.content;
    }
  });
}

export default function Latex({ content }) {
  if (!content) return null;

  const lines = content.split('\n');
  const renderedElements = [];
  let currentList = null; // Để nhóm các thẻ <li> vào <ul> hoặc <ol>
  let currentListType = null; // 'ul' hoặc 'ol'

  const pushCurrentList = () => {
    if (currentList) {
      const Tag = currentListType === 'ol' ? 'ol' : 'ul';
      renderedElements.push(
        <Tag key={`list-${renderedElements.length}`} className={currentListType === 'ol' ? 'custom-ol' : 'custom-ul'}>
          {currentList}
        </Tag>
      );
      currentList = null;
      currentListType = null;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // 1. Dòng trống
    if (trimmed === '') {
      pushCurrentList();
      return;
    }

    // 2. Block LaTeX ($$...$$)
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
      pushCurrentList();
      const formula = trimmed.slice(2, -2);
      try {
        const html = katex.renderToString(formula, {
          displayMode: true,
          throwOnError: false,
        });
        renderedElements.push(
          <div
            key={index}
            className="latex-block"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch (e) {
        renderedElements.push(
          <div key={index} className="latex-block-error">
            <code>{formula}</code>
          </div>
        );
      }
      return;
    }

    // 3. Tiêu đề (### hoặc ## hoặc #)
    if (trimmed.startsWith('### ')) {
      pushCurrentList();
      renderedElements.push(
        <h3 key={index} className="theory-h3">
          {renderTextWithMath(trimmed.substring(4))}
        </h3>
      );
      return;
    }
    if (trimmed.startsWith('## ')) {
      pushCurrentList();
      renderedElements.push(
        <h2 key={index} className="theory-h2">
          {renderTextWithMath(trimmed.substring(3))}
        </h2>
      );
      return;
    }
    if (trimmed.startsWith('# ')) {
      pushCurrentList();
      renderedElements.push(
        <h1 key={index} className="theory-h1">
          {renderTextWithMath(trimmed.substring(2))}
        </h1>
      );
      return;
    }

    // 4. Danh sách không thứ tự (- hoặc *)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (currentListType !== 'ul') {
        pushCurrentList();
        currentListType = 'ul';
        currentList = [];
      }
      currentList.push(
        <li key={`li-${index}`} className="theory-li">
          {renderTextWithMath(trimmed.substring(2))}
        </li>
      );
      return;
    }

    // 5. Danh sách có thứ tự (1. , 2. )
    const olMatch = trimmed.match(/^(\d+)\.\s(.*)/);
    if (olMatch) {
      if (currentListType !== 'ol') {
        pushCurrentList();
        currentListType = 'ol';
        currentList = [];
      }
      currentList.push(
        <li key={`li-${index}`} className="theory-li">
          {renderTextWithMath(olMatch[2])}
        </li>
      );
      return;
    }

    // 6. Dòng văn bản bình thường (Paragraph)
    pushCurrentList();
    renderedElements.push(
      <p key={index} className="theory-p">
        {renderTextWithMath(line)}
      </p>
    );
  });

  // Đẩy danh sách cuối cùng nếu còn
  pushCurrentList();

  return <div className="latex-rendered-content">{renderedElements}</div>;
}
