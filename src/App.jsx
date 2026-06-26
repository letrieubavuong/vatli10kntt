import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Latex from './components/Latex';
import Exercises from './components/Exercises';
import LoginModal from './components/LoginModal';
import AdminView from './components/AdminView';
import { physicsData } from './data/physicsData';
import { BookOpen, Award } from 'lucide-react';

export default function App() {
  // 1. Trạng thái bài học hiện tại (mặc định bài đầu tiên của chương I)
  const [currentLessonId, setCurrentLessonId] = useState('bai-1');

  // 2. Trạng thái thông tin học sinh (Họ tên + SĐT)
  const [studentInfo, setStudentInfo] = useState(null);

  // 3. Trạng thái mở/đóng Modal đăng nhập
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // 4. Trạng thái mở/đóng Sidebar trên Mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 5. Tab đang chọn: 'theory' (Lý thuyết) hoặc 'exercises' (Bài tập vận dụng)
  const [activeTab, setActiveTab] = useState('theory');

  // 6. View hiển thị: 'student' (Học sinh) hoặc 'admin' (Giáo viên)
  // Tự động chuyển sang Admin nếu trên đường dẫn có ?view=admin
  const [view, setView] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('view') === 'admin' ? 'admin' : 'student';
  });

  // Đọc thông tin học sinh từ localStorage khi tải trang
  useEffect(() => {
    const savedInfo = localStorage.getItem('studentInfo');
    if (savedInfo) {
      try {
        setStudentInfo(JSON.parse(savedInfo));
      } catch (e) {
        localStorage.removeItem('studentInfo');
      }
    }
  }, []);

  // Tìm bài học hiện tại dựa trên ID
  const allLessons = physicsData.flatMap(chapter => chapter.lessons);
  const currentLesson = allLessons.find(lesson => lesson.id === currentLessonId) || allLessons[0];

  // Tìm thông tin chương chứa bài học hiện tại để làm thẻ phân loại (tag)
  const currentChapter = physicsData.find(chapter =>
    chapter.lessons.some(lesson => lesson.id === currentLesson.id)
  ) || physicsData[0];

  // Đổi bài học -> Tự động chuyển về tab Lý thuyết để đọc trước
  const handleSelectLesson = (lessonId) => {
    setCurrentLessonId(lessonId);
    setActiveTab('theory');
  };

  const handleLogin = (info) => {
    setStudentInfo(info);
  };

  const handleLogout = () => {
    localStorage.removeItem('studentInfo');
    setStudentInfo(null);
  };

  // Nếu giáo viên đang xem bảng điểm
  if (view === 'admin') {
    return <AdminView onClose={() => setView('student')} />;
  }

  return (
    <div className="app-container">
      {/* 1. Thanh điều hướng Mục lục bên trái */}
      <Sidebar
        chapters={physicsData}
        currentLessonId={currentLessonId}
        onSelectLesson={handleSelectLesson}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onSelectAdminView={() => setView('admin')}
      />

      {/* 2. Phần nội dung chính bên phải */}
      <div className="main-wrapper">
        {/* Thanh đầu trang */}
        <Header
          studentInfo={studentInfo}
          onLogout={handleLogout}
          onOpenLogin={() => setIsLoginModalOpen(true)}
        />

        <main className="content-container">
          <div className="lesson-container">
            {/* Tiêu đề & Tag chương */}
            <div className="lesson-header animate-fade-in">
              <span className="lesson-tag">{currentChapter.title}</span>
              <h1 className="lesson-main-title">{currentLesson.title}</h1>
            </div>

            {/* Điều hướng Tab: Lý thuyết / Bài tập */}
            <div className="tabs-navigation">
              <button
                className={`tab-btn ${activeTab === 'theory' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('theory')}
              >
                <BookOpen size={18} />
                <span>📚 Lý thuyết bài học</span>
              </button>
              <button
                className={`tab-btn ${activeTab === 'exercises' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('exercises')}
              >
                <Award size={18} />
                <span>🎯 Bài tập vận dụng</span>
              </button>
            </div>

            {/* Chi tiết nội dung của từng Tab */}
            <div className="tab-content-panel">
              {activeTab === 'theory' ? (
                <article className="theory-card animate-fade-in">
                  <Latex content={currentLesson.theory} />
                </article>
              ) : (
                <Exercises
                  exercises={currentLesson.exercises}
                  studentInfo={studentInfo}
                  onOpenLogin={() => setIsLoginModalOpen(true)}
                  lessonTitle={currentLesson.title}
                />
              )}
            </div>
          </div>
        </main>
      </div>

      {/* 3. Modal Đăng nhập học sinh */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}
