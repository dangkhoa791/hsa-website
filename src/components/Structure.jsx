const parts = [
  {
    num: 1,
    title: 'Toán học & Xử lý số liệu',
    subtitle: 'Tư duy định lượng',
    time: '75 phút',
    questions: '50 câu',
    color: 'from-blue-600 to-blue-800',
    icon: '📐',
    details: [
      '35 câu trắc nghiệm 4 lựa chọn',
      '15 câu điền đáp án (không có lựa chọn)',
      'Số học, đại số, hình học, xác suất - thống kê',
      'Tư duy logic và phân tích số liệu',
    ],
    tip: 'Phần duy nhất có câu điền đáp án – không được đoán mò!',
  },
  {
    num: 2,
    title: 'Văn học – Ngôn ngữ',
    subtitle: 'Tư duy định tính',
    time: '60 phút',
    questions: '50 câu',
    color: 'from-emerald-600 to-emerald-800',
    icon: '📚',
    details: [
      '25 câu hỏi đơn (trắc nghiệm 4 lựa chọn)',
      '5 chùm × 5 câu/chùm (1 ngữ cảnh – 5 câu)',
      'Đọc hiểu văn bản – nghị luận',
      'Tiếng Việt, từ vựng, ngữ pháp, logic văn bản',
    ],
    tip: 'Chùm câu (clustered) chiếm 25 câu – đọc kỹ ngữ cảnh đầu bài!',
  },
  {
    num: 3,
    title: 'Khoa học hoặc Tiếng Anh',
    subtitle: 'Chọn 1 trong 2 hướng',
    time: '60 phút',
    questions: '50 câu',
    color: 'from-purple-600 to-purple-800',
    icon: '🔬',
    details: [
      'Hướng KH: chọn 3 trong 5 môn (Vật lí, Hóa, Sinh, Lịch sử, Địa lí)',
      'Mỗi môn Khoa học: 16–17 câu',
      'Hướng TA: 50 câu Tiếng Anh toàn phần',
      'Điểm cao nhất 2026 (133) thuộc hướng Tiếng Anh',
    ],
    tip: 'Hướng Tiếng Anh đang có xu hướng điểm cao hơn – cân nhắc nếu bạn mạnh TA!',
  },
]

export default function Structure() {
  return (
    <section id="structure" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-gray-800">Cấu trúc đề thi HSA</h2>
        <p className="section-subtitle">3 phần thi – 150 câu – 195 phút – thi trên máy tính</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {parts.map(p => (
            <div key={p.num} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className={`bg-gradient-to-br ${p.color} p-6 text-white`}>
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">Phần {p.num}</div>
                <h3 className="text-lg font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-white/70">{p.subtitle}</p>
                <div className="flex gap-4 mt-4">
                  <div className="bg-white/10 rounded-lg px-3 py-1.5 text-center">
                    <div className="font-bold">{p.questions}</div>
                    <div className="text-xs text-white/60">câu hỏi</div>
                  </div>
                  <div className="bg-white/10 rounded-lg px-3 py-1.5 text-center">
                    <div className="font-bold">{p.time}</div>
                    <div className="text-xs text-white/60">thời gian</div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white p-6">
                <ul className="space-y-2 mb-4">
                  {p.details.map(d => (
                    <li key={d} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-hsa-red mt-0.5 flex-shrink-0">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-800">
                  💡 <strong>Tip:</strong> {p.tip}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tóm tắt bảng */}
        <div className="card overflow-hidden p-0">
          <div className="bg-hsa-red text-white px-6 py-3">
            <h3 className="font-bold">Tóm tắt cấu trúc</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 text-left">Phần thi</th>
                  <th className="px-4 py-3 text-center">Số câu</th>
                  <th className="px-4 py-3 text-center">Thời gian</th>
                  <th className="px-4 py-3 text-center">Dạng câu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Toán học & Xử lý số liệu</td>
                  <td className="px-4 py-3 text-center">50</td>
                  <td className="px-4 py-3 text-center">75 phút</td>
                  <td className="px-4 py-3 text-center">TN + Điền đáp án</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Văn học – Ngôn ngữ</td>
                  <td className="px-4 py-3 text-center">50</td>
                  <td className="px-4 py-3 text-center">60 phút</td>
                  <td className="px-4 py-3 text-center">Trắc nghiệm 4 lựa chọn</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">Khoa học / Tiếng Anh</td>
                  <td className="px-4 py-3 text-center">50</td>
                  <td className="px-4 py-3 text-center">60 phút</td>
                  <td className="px-4 py-3 text-center">Trắc nghiệm 4 lựa chọn</td>
                </tr>
                <tr className="bg-red-50 font-bold">
                  <td className="px-4 py-3 text-hsa-red">Tổng cộng</td>
                  <td className="px-4 py-3 text-center text-hsa-red">150</td>
                  <td className="px-4 py-3 text-center text-hsa-red">195 phút</td>
                  <td className="px-4 py-3 text-center text-hsa-red">Thi trên máy tính</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
