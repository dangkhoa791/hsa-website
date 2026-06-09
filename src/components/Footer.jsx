const navLinks = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Cấu trúc đề', href: '#structure' },
  { label: 'Lịch thi', href: '#schedule' },
  { label: 'Đăng ký & Nội quy', href: '#registration' },
  { label: 'Cộng đồng', href: '#community' },
  { label: 'Tin tức', href: '#news' },
  { label: 'Kỳ thi khác', href: '#other-exams' },
  { label: 'FAQ', href: '#faq' },
]

const officialLinks = [
  { label: 'Đăng ký / Tra cứu điểm', href: 'https://hsa.edu.vn' },
  { label: 'ĐHQG Hà Nội', href: 'https://vnu.edu.vn' },
  { label: 'VNU-IDT', href: 'https://idt.vnu.edu.vn' },
  { label: 'Tuyển sinh ĐHQG HN', href: 'https://tuyensinh.vnu.edu.vn' },
]

export default function Footer() {
  return (
    <footer className="bg-hsa-navy text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-black text-hsa-gold">XOÁ MÙ</span>
              <span className="text-2xl font-black text-white">HSA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tổng hợp thông tin kỳ thi Đánh giá Năng lực ĐHQG Hà Nội. Cập nhật nhanh, chính xác, miễn phí.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-300">Điều hướng</h4>
            <ul className="space-y-1.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-hsa-gold text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-300">Nguồn chính thức</h4>
            <ul className="space-y-1.5">
              {officialLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-hsa-gold text-sm transition-colors"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-xs space-y-1">
          <p>Đây là trang thông tin tổng hợp, <strong className="text-gray-400">không phải trang chính thức</strong> của ĐHQG Hà Nội.</p>
          <p>Mọi thông tin chính thức vui lòng kiểm tra tại <a href="https://hsa.edu.vn" target="_blank" rel="noopener noreferrer" className="text-hsa-gold hover:underline">hsa.edu.vn</a>.</p>
          <p className="mt-3">© 2026 Xoá Mù HSA</p>
        </div>
      </div>
    </footer>
  )
}
