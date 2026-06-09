const steps = [
  {
    num: 1,
    title: 'Tạo tài khoản dự thi',
    icon: '👤',
    content: [
      'Truy cập hsa.edu.vn → chọn "Đăng ký tài khoản"',
      'Cần có số điện thoại cá nhân (nhận OTP xác thực)',
      'Cần có email cá nhân (không dùng chung với người khác)',
      'Điền đầy đủ thông tin cá nhân theo CCCD/CMND',
    ],
    note: 'Đăng ký tài khoản thường mở từ tháng 11 – tháng 1 trước kỳ thi.',
  },
  {
    num: 2,
    title: 'Chọn ca thi & đợt thi',
    icon: '📅',
    content: [
      'Đăng nhập tài khoản → chọn "Đăng ký ca thi"',
      'Chọn theo thứ tự: Kỳ thi → Đợt thi → Địa điểm → Ca thi',
      'Mỗi năm được đăng ký tối đa 2 ca thi (2 lần thi)',
      '2 ca thi liên tiếp phải cách nhau tối thiểu 28 ngày',
    ],
    note: 'Đăng ký sớm khi cổng mở — ca thi tại Hà Nội thường hết chỗ nhanh!',
  },
  {
    num: 3,
    title: 'Thanh toán lệ phí',
    icon: '💳',
    content: [
      'Lệ phí: 600.000 đồng / lượt thi',
      'Thanh toán trong vòng 1 – 96 giờ sau khi chọn ca thi thành công',
      'Quá thời hạn sẽ bị hủy đăng ký — phải đăng ký lại từ đầu',
      'Hỗ trợ nhiều hình thức: chuyển khoản, ví điện tử, thẻ ngân hàng',
    ],
    note: 'Thanh toán ngay sau khi chọn ca để tránh bị hủy tự động.',
  },
  {
    num: 4,
    title: 'Dự thi',
    icon: '🖥️',
    content: [
      'Đến phòng thi trước giờ thi ít nhất 15 – 30 phút',
      'Mang theo CCCD/CMND bản gốc (bắt buộc)',
      'Nhớ số báo danh để tra cứu máy thi',
      'Thi trên máy tính — biết điểm ngay sau khi nộp bài',
    ],
    note: 'Không cần in giấy tờ, không mang bút. Phòng thi cung cấp đầy đủ.',
  },
]

const rules = [
  { icon: '✅', label: 'Được mang vào phòng thi', items: ['CCCD / CMND bản gốc', 'Nước uống (bình nhựa không nhãn)', 'Thuốc theo toa (khai báo trước)'] },
  { icon: '❌', label: 'Không được mang vào', items: ['Điện thoại, máy tính, thiết bị điện tử', 'Tài liệu, sách, giấy nháp', 'Đồng hồ thông minh, tai nghe'] },
]

const notes = [
  { icon: '⏰', text: 'Vào muộn quá 15 phút sau giờ thi không được vào phòng' },
  { icon: '🔇', text: 'Giữ yên lặng tuyệt đối trong suốt ca thi' },
  { icon: '🚫', text: 'Gian lận sẽ bị đình chỉ thi và hủy kết quả toàn bộ các lần thi trong năm' },
  { icon: '📸', text: 'Không chụp ảnh màn hình hay sao chép đề thi dưới bất kỳ hình thức nào' },
  { icon: '🖥️', text: 'Kết quả hiển thị ngay sau khi nộp bài — ghi lại màn hình kết quả trước khi thoát' },
  { icon: '📋', text: 'Căn cứ pháp lý: Quyết định 368/QĐ-ĐHQGHN ngày 24/01/2025' },
]

export default function Registration() {
  return (
    <section id="registration" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-gray-800">Đăng ký & Nội quy thi</h2>
        <p className="section-subtitle">Quy trình đăng ký 4 bước và những điều cần biết trước khi vào phòng thi</p>

        {/* Quy trình đăng ký */}
        <h3 className="text-xl font-bold text-gray-700 mb-5">📋 Quy trình đăng ký</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {steps.map(s => (
            <div key={s.num} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-hsa-red text-white font-black flex items-center justify-center text-sm flex-shrink-0">
                  {s.num}
                </div>
                <div className="text-2xl">{s.icon}</div>
                <h4 className="font-bold text-gray-800">{s.title}</h4>
              </div>
              <ul className="space-y-1.5 mb-3">
                {s.content.map(c => (
                  <li key={c} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-hsa-red flex-shrink-0 mt-0.5">›</span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
                💡 {s.note}
              </div>
            </div>
          ))}
        </div>

        {/* Lệ phí nổi bật */}
        <div className="bg-gradient-to-r from-hsa-red to-hsa-dark rounded-2xl p-6 text-white text-center mb-14">
          <p className="text-red-200 text-sm uppercase tracking-widest mb-1">Lệ phí dự thi</p>
          <p className="text-5xl font-black text-hsa-gold mb-1">600.000 ₫</p>
          <p className="text-red-200 text-sm">/ lượt thi · tối đa 2 lượt/năm</p>
          <a
            href="https://hsa.edu.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-white text-hsa-red font-bold px-6 py-2 rounded-xl hover:bg-red-50 transition-colors text-sm"
          >
            Đăng ký tại hsa.edu.vn →
          </a>
        </div>

        {/* Nội quy */}
        <h3 className="text-xl font-bold text-gray-700 mb-5">📜 Nội quy phòng thi</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {rules.map(r => (
            <div key={r.label} className="card">
              <h4 className="font-bold text-gray-800 mb-3">{r.icon} {r.label}</h4>
              <ul className="space-y-1.5">
                {r.items.map(item => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700">
                    <span className="flex-shrink-0">{r.icon === '✅' ? '✓' : '✗'}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card bg-gray-50">
          <h4 className="font-bold text-gray-800 mb-4">⚠️ Lưu ý quan trọng</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {notes.map(n => (
              <div key={n.text} className="flex gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 text-base">{n.icon}</span>
                <span>{n.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
