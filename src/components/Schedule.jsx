const rounds = [
  { dot: 1, date: '07/03/2026 (Thứ 7)', status: 'done', result: 'Đã công bố' },
  { dot: 2, date: '22/03/2026 (CN)', status: 'done', result: 'Đã công bố' },
  { dot: 3, date: '05/04/2026 (CN)', status: 'done', result: 'Đã công bố' },
  { dot: 4, date: '19/04/2026 (CN)', status: 'done', result: 'Đã công bố' },
  { dot: 5, date: '03/05/2026 (CN)', status: 'done', result: 'Đã công bố' },
  { dot: 6, date: '24/05/2026 (CN)', status: 'done', result: 'Đã công bố – Phổ điểm 29/05/2026' },
]

const locations = ['Hà Nội', 'Hải Phòng', 'Ninh Bình', 'Hưng Yên', 'Thái Nguyên', 'Thanh Hoá', 'Nghệ An', 'Hà Tĩnh']

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-gray-800">Lịch thi HSA 2026</h2>
        <p className="section-subtitle">6 đợt thi – tất cả đã kết thúc</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {rounds.map(r => (
            <div key={r.dot} className="card flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-black text-lg">
                ✓
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-gray-800">Đợt {r.dot}</span>
                  <span className="badge bg-green-100 text-green-700">Đã kết thúc</span>
                </div>
                <p className="text-gray-600 text-sm">{r.date}</p>
                <p className="text-green-600 text-xs mt-1 font-medium">✓ {r.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Địa điểm */}
        <div className="card">
          <h3 className="font-bold text-gray-800 mb-4">📍 Địa điểm thi</h3>
          <div className="flex flex-wrap gap-2">
            {locations.map(l => (
              <span key={l} className="bg-red-50 text-hsa-red text-sm font-medium px-3 py-1.5 rounded-full border border-red-100">
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Đăng ký 2027 */}
        <div className="mt-8 bg-gradient-to-r from-hsa-red to-hsa-dark rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">🗓️ HSA 2027</h3>
          <p className="text-red-200 mb-4">Lịch thi 2027 chưa được công bố chính thức. Theo dõi trang này để cập nhật sớm nhất!</p>
          <a
            href="https://hsa.edu.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-hsa-red font-bold px-6 py-2 rounded-xl hover:bg-red-50 transition-colors"
          >
            Trang chính thức hsa.edu.vn →
          </a>
        </div>
      </div>
    </section>
  )
}
