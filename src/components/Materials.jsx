export default function Materials() {
  const PDF_URL = 'https://hsa.edu.vn/huong-dan/dang-thuc-bai-thi'
  // Khi có file PDF thực tế, thay thế bằng URL direct và dùng Google Docs Viewer

  return (
    <section id="materials" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-gray-800">Tài liệu & Đề cương</h2>
        <p className="section-subtitle">Dạng thức bài thi và đề cương ôn tập chính thức từ ĐHQG Hà Nội</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Dạng thức bài thi */}
          <div className="card hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📄</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge bg-green-100 text-green-700">Chính thức</span>
              <span className="badge bg-blue-100 text-blue-700">2026</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Dạng thức bài thi HSA 2026</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Tài liệu chính thức từ VNU-IDT mô tả cấu trúc, dạng câu hỏi và ví dụ minh họa cho từng phần thi.
            </p>
            <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500">
              <span>📝 3 phần thi</span>
              <span>·</span>
              <span>⏱ 195 phút</span>
              <span>·</span>
              <span>🏆 150 điểm</span>
            </div>
            <a
              href="https://www.hsa.edu.vn/huong-dan/dang-thuc-bai-thi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Xem dạng thức →
            </a>
          </div>

          {/* Đề cương */}
          <div className="card hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📚</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge bg-green-100 text-green-700">Chính thức</span>
              <span className="badge bg-purple-100 text-purple-700">Đề cương</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Đề cương ôn tập HSA</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Nội dung kiến thức trọng tâm cho cả 3 phần thi, bao gồm phạm vi và mức độ yêu cầu của từng môn.
            </p>
            <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-500">
              <span>📐 Toán học</span>
              <span>·</span>
              <span>📖 Ngôn ngữ</span>
              <span>·</span>
              <span>🔬 Khoa học</span>
            </div>
            <a
              href="https://vnexpress.net/cau-truc-de-thi-de-cuong-on-tap-thi-danh-gia-nang-luc-hsa-dai-hoc-quoc-gia-ha-noi-nam-2026-moi-nhat-5010216.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
            >
              Xem đề cương →
            </a>
          </div>
        </div>

        {/* Bộ đề thử */}
        <div className="card bg-gradient-to-r from-hsa-red to-hsa-dark text-white p-6">
          <div className="flex items-center gap-4">
            <div className="text-5xl">🎯</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">Luyện đề trực tuyến</h3>
              <p className="text-red-200 text-sm mb-3">
                Thử sức với đề thi mẫu trên hệ thống chính thức của VNU-IDT — có giải thích đáp án chi tiết.
              </p>
              <a
                href="https://www.hsa.edu.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-hsa-red font-bold px-5 py-2 rounded-xl hover:bg-red-50 transition-colors text-sm"
              >
                Vào hsa.edu.vn →
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          * Tài liệu được liên kết từ nguồn chính thức ĐHQG Hà Nội. Xoá Mù HSA không lưu trữ hay phân phối đề thi.
        </p>
      </div>
    </section>
  )
}
