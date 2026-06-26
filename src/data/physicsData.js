export const physicsData = [
  {
    id: "chuong-1",
    title: "Chương I: Mở đầu",
    lessons: [
      {
        id: "bai-1",
        title: "Bài 1: Khái quát về môn Vật lí",
        theory: `### I. Đối tượng nghiên cứu của Vật lí
Vật lí là môn khoa học nghiên cứu về các dạng vận động của **vật chất** (chất, trường) và **năng lượng**. 
Các lĩnh vực nghiên cứu của Vật lí rất đa dạng, từ thế giới vi mô (hạt nhân, nguyên tử) đến thế giới vĩ mô (các thiên thể, vũ trụ).

### II. Phương pháp nghiên cứu Vật lí
Phương pháp nghiên cứu Vật lí gồm hai phương pháp chính tương hỗ lẫn nhau:
1. **Phương pháp thực nghiệm**: Dùng thí nghiệm để phát hiện quy luật hoặc kiểm chứng lý thuyết.
2. **Phương pháp mô hình**: Xây dựng mô hình (toán học, vật lí, giả thuyết) để giải thích và dự đoán hiện tượng.
Sơ đồ của phương pháp thực nghiệm:
$$\\text{Xác định vấn đề} \\rightarrow \\text{Quan sát/Giả thuyết} \\rightarrow \\text{Thí nghiệm kiểm chứng} \\rightarrow \\text{Phân tích kết quả} \\rightarrow \\text{Kết luận}$$

### III. Phép đo các đại lượng vật lí và Sai số
Khi đo một đại lượng vật lí $A$, ta nhận được giá trị trung bình $\\bar{A}$ và sai số tuyệt đối $\\Delta A$. Kết quả phép đo được biểu diễn dưới dạng:
$$A = \\bar{A} \\pm \\Delta A$$
- **Sai số tuyệt đối trung bình**:
$$\\Delta A = \\frac{\\Delta A_1 + \\Delta A_2 + ... + \\Delta A_n}{n}$$
- **Sai số tỉ đối (sai số tương đối)**: Cho biết mức độ chính xác của phép đo.
$$\\delta A = \\frac{\\Delta A}{\\bar{A}} \\times 100\\%$$
- **Quy tắc tính sai số**:
  - Đối với phép tổng hoặc hiệu: $F = A \\pm B \\Rightarrow \\Delta F = \\Delta A + \\Delta B$
  - Đối với phép tích hoặc thương: $F = A \\cdot B \\text{ hoặc } F = \\frac{A}{B} \\Rightarrow \\delta F = \\delta a + \\delta b$`,
        exercises: [
          {
            id: "b1-ex1",
            type: "Dạng 1: Tính toán sai số phép đo",
            question: "Một học sinh đo chiều dài của một cuốn sách Vật lí 10 được kết quả $L = 26,5 \\pm 0,2\\text{ cm}$. Sai số tỉ đối của phép đo này bằng bao nhiêu?",
            options: [
              "A. $0,75\\%$",
              "B. $0,2\\%$",
              "C. $26,5\\%$",
              "D. $1,32\\%$"
            ],
            correctOption: 0,
            explanation: "Sai số tỉ đối được tính theo công thức:\n$$\\delta L = \\frac{\\Delta L}{\\bar{L}} \\times 100\\%$$\nThay số ta có:\n$$\\delta L = \\frac{0,2}{26,5} \\times 100\\% \\approx 0,7547\\% \\approx 0,75\\%$$\nDo đó đáp án đúng là **A**."
          },
          {
            id: "b1-ex2",
            type: "Dạng 1: Tính toán sai số phép đo",
            question: "Đo diện tích một tấm bìa hình chữ nhật có các cạnh $a = 5,0 \\pm 0,1\\text{ cm}$ và $b = 10,0 \\pm 0,2\\text{ cm}$. Diện tích của tấm bìa là $S = a \\cdot b$. Sai số tỉ đối $\\delta S$ của diện tích tấm bìa là:",
            options: [
              "A. $2,0\\%$",
              "B. $4,0\\%$",
              "C. $3,0\\%$",
              "D. $1,0\\%$"
            ],
            correctOption: 1,
            explanation: "Áp dụng công thức tính sai số cho phép tích $S = a \\cdot b$, ta có sai số tỉ đối của diện tích bằng tổng các sai số tỉ đối của các cạnh đo:\n$$\\delta S = \\delta a + \\delta b = \\frac{\\Delta a}{\\bar{a}} + \\frac{\\Delta b}{\\bar{b}}$$\nThay số:\n$$\\delta S = \\frac{0,1}{5,0} + \\frac{0,2}{10,0} = 0,02 + 0,02 = 0,04 = 4\\%$$\nĐáp án đúng là **B**."
          }
        ]
      },
      {
        id: "bai-2",
        title: "Bài 2: Vấn đề an toàn trong Vật lí",
        theory: `### I. Các nguy cơ mất an toàn trong phòng thực hành Vật lí
Trong phòng thực hành Vật lí, học sinh cần chú ý các nguồn nguy hiểm sau:
1. **Nguy cơ điện giật**: Sử dụng nguồn điện xoay chiều có hiệu điện thế cao ($U > 40\\text{ V}$).
2. **Nguy cơ cháy nổ**: Do chập điện, sử dụng các hóa chất dễ cháy gần nguồn nhiệt hoặc quá tải thiết bị.
3. **Nguy cơ bỏng/Tổn thương mắt**: Sử dụng đèn laser cường độ cao, các vật nóng, hoặc tia cực tím.
4. **Nguy cơ độc hại**: Thủy ngân trong nhiệt kế bị vỡ, rác thải pin điện hóa.

### II. Các quy tắc an toàn cơ bản
- **Không tự ý cắm điện** hoặc bật nguồn khi chưa có sự đồng ý của giáo viên.
- Đọc kỹ các ký hiệu cảnh báo trên thiết bị:
  - ⚡ *Ký hiệu nguy hiểm về điện* (High Voltage).
  - ☢️ *Ký hiệu chất phóng xạ* (Radioactive).
  - 🚫 *Ký hiệu cấm* (Cấm nước, cấm lửa...).
- Khi xảy ra sự cố điện, ngay lập tức **ngắt cầu dao điện tổng** trước khi sơ cứu nạn nhân.`,
        exercises: [
          {
            id: "b2-ex1",
            type: "Dạng 1: Nhận biết quy tắc an toàn",
            question: "Hành động nào sau đây là ĐÚNG quy tắc an toàn trong phòng thực hành Vật lí?",
            options: [
              "A. Tự ý cắm phích điện vào nguồn $220\\text{ V}$ để kiểm tra hoạt động của mạch.",
              "B. Chỉ cắm điện và tiến hành thí nghiệm sau khi giáo viên đã kiểm tra mạch và cho phép.",
              "C. Dùng tay ướt để bật/tắt các công tắc điện thí nghiệm.",
              "D. Đổ trực tiếp chất thải pin hóa học vào bồn rửa mặt sau khi thí nghiệm xong."
            ],
            correctOption: 1,
            explanation: "Theo quy định an toàn phòng thực hành, việc chỉ cắm điện và vận hành mạch điện sau khi giáo viên kiểm tra và cho phép là hành động đúng. Các hành động khác đều gây mất an toàn (nguy cơ giật điện, chập cháy, ô nhiễm môi trường).\n\nĐáp án đúng là **B**."
          }
        ]
      }
    ]
  },
  {
    id: "chuong-2",
    title: "Chương II: Động học",
    lessons: [
      {
        id: "bai-4",
        title: "Bài 4: Độ dịch chuyển và quãng đường đi được",
        theory: `### I. Quãng đường đi được (s)
- Là độ dài tuyến đường (quỹ đạo) mà vật thực tế đã đi qua.
- Quãng đường là một đại lượng **vô hướng** luôn dương ($s > 0$).

### II. Độ dịch chuyển (d)
- Là một đại lượng **vectơ** (ký hiệu là $\\vec{d}$) nối điểm đầu và điểm cuối của chuyển động.
- Cho biết độ lớn và hướng của sự thay đổi vị trí của vật.
- Độ lớn của độ dịch chuyển trong hệ tọa độ một chiều $Ox$ được tính bằng:
$$d = x_2 - x_1$$
- Có thể dương, âm hoặc bằng 0 tùy thuộc vào chiều chọn của trục tọa độ.

### III. So sánh quãng đường và độ dịch chuyển
- Vật chuyển động thẳng và không đổi chiều: Quãng đường bằng độ lớn độ dịch chuyển ($s = |d|$).
- Vật chuyển động thẳng có đổi chiều hoặc chuyển động cong: Quãng đường luôn lớn hơn độ lớn độ dịch chuyển ($s > |d|$).
- Vật quay trở lại vị trí xuất phát: Độ dịch chuyển bằng không ($d = 0$) dù quãng đường $s > 0$.`,
        exercises: [
          {
            id: "b4-ex1",
            type: "Dạng 1: Phân biệt quãng đường và độ dịch chuyển",
            question: "Một vận động viên bơi từ đầu bể đến cuối bể bơi có chiều dài $50\\text{ m}$, sau đó quay trở lại điểm xuất phát. Quãng đường đi được $s$ và độ lớn độ dịch chuyển $d$ của người đó lần lượt là:",
            options: [
              "A. $s = 50\\text{ m}, d = 50\\text{ m}$",
              "B. $s = 100\\text{ m}, d = 100\\text{ m}$",
              "C. $s = 100\\text{ m}, d = 0\\text{ m}$",
              "D. $s = 0\\text{ m}, d = 100\\text{ m}$"
            ],
            correctOption: 2,
            explanation: "- Quãng đường thực tế đi được: $s = 50\\text{ m} + 50\\text{ m} = 100\\text{ m}$.\n- Vì điểm đầu và điểm cuối trùng nhau (về vị trí xuất phát), độ dịch chuyển bằng 0: $d = 0\\text{ m}$.\n\nĐáp án đúng là **C**."
          },
          {
            id: "b4-ex2",
            type: "Dạng 2: Tính toán độ dịch chuyển tổng hợp",
            question: "Một người đi bộ đi từ điểm A hướng về phía Bắc $4\\text{ km}$, sau đó rẽ hướng Đông đi tiếp $3\\text{ km}$ để tới điểm B. Độ lớn độ dịch chuyển tổng hợp $d$ từ A đến B là:",
            options: [
              "A. $7\\text{ km}$",
              "B. $5\\text{ km}$",
              "C. $1\\text{ km}$",
              "D. $25\\text{ km}$"
            ],
            correctOption: 1,
            explanation: "Hai hướng Bắc và Đông vuông góc với nhau. Quỹ đạo tạo thành một tam giác vuông.\n- Độ dịch chuyển $\\vec{d}$ là vectơ nối điểm đầu A và điểm cuối B.\n- Độ lớn độ dịch chuyển $d = AB$ được tính bằng định lý Pythagoras:\n$$d = \\sqrt{d_1^2 + d_2^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ km}$$\n\nĐáp án đúng là **B**."
          }
        ]
      },
      {
        id: "bai-5",
        title: "Bài 5: Tốc độ và vận tốc",
        theory: `### I. Tốc độ trung bình
- Tốc độ trung bình là đại lượng vô hướng đặc trưng cho sự nhanh, chậm của chuyển động:
$$v = \\frac{s}{t}$$
Trong đó:
- $s$: Quãng đường đi được (m, km).
- $t$: Thời gian đi hết quãng đường đó (s, h).

### II. Vận tốc trung bình
- Vận tốc trung bình là đại lượng vectơ đặc trưng cho chiều và sự nhanh chậm của sự thay đổi vị trí của vật:
$$\\vec{v}_{tb} = \\frac{\\vec{d}}{t}$$
- Trong chuyển động một chiều trên trục tọa độ $Ox$, giá trị đại số của vận tốc trung bình là:
$$v_{tb} = \\frac{d}{t} = \\frac{x_2 - x_1}{t_2 - t_1}$$
  - $v_{tb} > 0$: Vật chuyển động theo chiều dương.
  - $v_{tb} < 0$: Vật chuyển động theo chiều âm.

### III. Vận tốc tức thời
Vận tốc tức thời là vận tốc tại một thời điểm xác định, được biểu diễn bằng tiếp tuyến với quỹ đạo tại điểm đó. Nó đo bằng độ dịch chuyển trong khoảng thời gian rất ngắn $\\Delta t \\to 0$:
$$\\vec{v} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta \\vec{d}}{\\Delta t}$$`,
        exercises: [
          {
            id: "b5-ex1",
            type: "Dạng 1: Tính tốc độ trung bình và vận tốc trung bình",
            question: "Một chiếc xe chạy trên đường thẳng. Trong $2\\text{ giờ}$ đầu xe chạy với tốc độ $60\\text{ km/h}$, trong $1\\text{ giờ}$ tiếp theo chạy với tốc độ $45\\text{ km/h}$. Tốc độ trung bình của xe trong suốt thời gian chuyển động là:",
            options: [
              "A. $52,5\\text{ km/h}$",
              "B. $55\\text{ km/h}$",
              "C. $50\\text{ km/h}$",
              "D. $57,5\\text{ km/h}$"
            ],
            correctOption: 1,
            explanation: "- Quãng đường xe đi trong giai đoạn 1: $s_1 = v_1 \\cdot t_1 = 60 \\cdot 2 = 120\\text{ km}$.\n- Quãng đường xe đi trong giai đoạn 2: $s_2 = v_2 \\cdot t_2 = 45 \\cdot 1 = 45\\text{ km}$.\n- Tổng quãng đường: $s = s_1 + s_2 = 120 + 45 = 165\\text{ km}$.\n- Tổng thời gian: $t = t_1 + t_2 = 2 + 1 = 3\\text{ h}$.\n- Tốc độ trung bình:\n$$v_{tb} = \\frac{s}{t} = \\frac{165}{3} = 55\\text{ km/h}$$\n\nĐáp án đúng là **B**."
          }
        ]
      },
      {
        id: "bai-7",
        title: "Bài 7: Gia tốc và chuyển động thẳng biến đổi đều",
        theory: `### I. Gia tốc (a)
Gia tốc là đại lượng vectơ đặc trưng cho tốc độ thay đổi cả về độ lớn và hướng của vận tốc theo thời gian:
$$\\vec{a} = \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{\\vec{v} - \\vec{v}_0}{t - t_0}$$
Đơn vị của gia tốc trong hệ SI là mét trên giây bình phương ($\\text{m/s}^2$).

### II. Chuyển động thẳng biến đổi đều
Là chuyển động thẳng có gia tốc không đổi theo thời gian ($\\vec{a} = \\text{const}$).
Có hai loại chuyển động thẳng biến đổi đều:
- **Chuyển động thẳng nhanh dần đều**: Vận tốc tăng đều theo thời gian ($\\vec{a}$ cùng chiều $\\vec{v} \\Rightarrow a \\cdot v > 0$).
- **Chuyển động thẳng chậm dần đều**: Vận tốc giảm đều theo thời gian ($\\vec{a}$ ngược chiều $\\vec{v} \\Rightarrow a \\cdot v < 0$).

### III. Các công thức của chuyển động thẳng biến đổi đều
Chọn trục $Ox$ trùng quỹ đạo thẳng, mốc thời gian $t_0 = 0$, vị trí ban đầu $x_0$:
1. **Công thức vận tốc**:
$$v = v_0 + at$$
2. **Công thức độ dịch chuyển**:
$$d = v_0 t + \\frac{1}{2}at^2$$
3. **Công thức liên hệ giữa gia tốc, vận tốc và độ dịch chuyển (không phụ thuộc thời gian)**:
$$v^2 - v_0^2 = 2ad$$
4. **Phương trình chuyển động**:
$$x = x_0 + v_0 t + \\frac{1}{2}at^2$$`,
        exercises: [
          {
            id: "b7-ex1",
            type: "Dạng 1: Tính gia tốc và vận tốc chuyển động thẳng biến đổi đều",
            question: "Một ô tô đang chạy với vận tốc $10\\text{ m/s}$ trên đoạn đường thẳng thì tài xế hãm phanh chuyển động chậm dần đều. Sau $10\\text{ s}$ ô tô dừng hẳn. Gia tốc của xe là:",
            options: [
              "A. $1\\text{ m/s}^2$",
              "B. $-1\\text{ m/s}^2$",
              "C. $-0,5\\text{ m/s}^2$",
              "D. $0,5\\text{ m/s}^2$"
            ],
            correctOption: 1,
            explanation: "Ta có:\n- Vận tốc ban đầu: $v_0 = 10\\text{ m/s}$.\n- Vận tốc cuối khi dừng lại: $v = 0\\text{ m/s}$.\n- Thời gian hãm phanh: $t = 10\\text{ s}$.\n\nÁp dụng công thức tính gia tốc:\n$$a = \\frac{v - v_0}{t} = \\frac{0 - 10}{10} = -1\\text{ m/s}^2$$\nDấu âm thể hiện gia tốc ngược chiều với chiều chuyển động ban đầu, ô tô chuyển động chậm dần đều.\n\nĐáp án đúng là **B**."
          },
          {
            id: "b7-ex2",
            type: "Dạng 2: Bài toán không phụ thuộc thời gian (Công thức độc lập)",
            question: "Một đoàn tàu đang đi với vận tốc $36\\text{ km/h}$ thì tăng tốc nhanh dần đều, đi được quãng đường $s = 300\\text{ m}$ đạt vận tốc $54\\text{ km/h}$. Gia tốc của đoàn tàu là bao nhiêu?",
            options: [
              "A. $0,208\\text{ m/s}^2$",
              "B. $0,05\\text{ m/s}^2$",
              "C. $0,25\\text{ m/s}^2$",
              "D. $0,125\\text{ m/s}^2$"
            ],
            correctOption: 0,
            explanation: "Trước hết, đổi đơn vị vận tốc sang $\\text{m/s}$:\n- $v_0 = 36\\text{ km/h} = \\frac{36}{3,6} = 10\\text{ m/s}$.\n- $v = 54\\text{ km/h} = \\frac{54}{3,6} = 15\\text{ m/s}$.\n\nVì tàu chuyển động thẳng không đổi chiều nên quãng đường bằng độ lớn độ dịch chuyển $d = s = 300\\text{ m}$.\n\nÁp dụng công thức liên hệ:\n$$v^2 - v_0^2 = 2ad \\Rightarrow a = \\frac{v^2 - v_0^2}{2d}$$\nThay số:\n$$a = \\frac{15^2 - 10^2}{2 \\cdot 300} = \\frac{225 - 100}{600} = \\frac{125}{600} \\approx 0,208\\text{ m/s}^2$$\n\nĐáp án đúng là **A**."
          }
        ]
      }
    ]
  }
];
