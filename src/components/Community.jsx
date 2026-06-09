const FB_LINK = 'https://www.facebook.com/share/g/1FqJj3Whgj/'

const benefits = [
  { icon: '📚', text: 'Chia sẻ tài liệu ôn thi HSA' },
  { icon: '🧠', text: 'Giải đề & thảo luận kiến thức' },
  { icon: '📢', text: 'Cập nhật thông báo mới nhất' },
  { icon: '🤝', text: 'Kết nối với thí sinh toàn quốc' },
]

export default function Community() {
  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-gray-800">Cộng đồng học tập</h2>
        <p className="section-subtitle">Tham gia group Facebook để ôn thi cùng hàng nghìn thí sinh HSA</p>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            {/* Header */}
            <div className="bg-[#1877f2] px-8 py-10 text-white text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#1877f2]">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-1">TRỌ HỌC TẬP</h3>
              <p className="text-blue-200 text-sm">Cộng đồng ôn thi Đánh giá Năng lực ĐHQG Hà Nội</p>
            </div>

            {/* Body */}
            <div className="bg-white px-8 py-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {benefits.map(b => (
                  <div key={b.text} className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3">
                    <span className="text-xl">{b.icon}</span>
                    <span className="text-sm text-gray-700 font-medium">{b.text}</span>
                  </div>
                ))}
              </div>

              <a
                href={FB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold py-3.5 rounded-xl transition-colors text-base"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Tham gia Group ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
