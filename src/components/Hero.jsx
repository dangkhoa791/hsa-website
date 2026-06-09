import { useState, useEffect } from 'react'

const TARGET = new Date('2026-09-01T08:00:00')

function useCountdown(target) {
  const calc = () => {
    const diff = target - Date.now()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    }
  }
  const [t, setT] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

function Pad({ n, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black/10 rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
        <span className="text-2xl sm:text-3xl font-black text-hsa-green tabular-nums">
          {String(n).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-hsa-green-dark mt-1 uppercase tracking-wider">{label}</span>
    </div>
  )
}

export default function Hero() {
  const { d, h, m, s } = useCountdown(TARGET)

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{backgroundColor:'#e8f5e2'}}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-hsa-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-hsa-green-dark rounded-full blur-3xl" />
      </div>

      {/* Banner thông báo */}
      <div className="relative z-10 w-full bg-black/10 text-center py-2 px-4 text-sm text-hsa-green-dark font-medium mb-8 mt-16">
        📢 Kỳ thi HSA 2026 đã kết thúc – Phổ điểm đã công bố ngày 29/05/2026
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-black/10 rounded-2xl px-6 py-2 mb-6">
          <span className="text-hsa-green-dark text-sm font-semibold uppercase tracking-widest">ĐHQG Hà Nội</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black mb-2 leading-tight" style={{color:'#003d1f'}}>
          XOÁ MÙ
        </h1>
        <h2 className="text-4xl sm:text-6xl font-black mb-6" style={{color:'#003d1f'}}>HSA</h2>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{color:'#003d1f'}}>
          Tổng hợp thông tin kỳ thi <strong>Đánh giá Năng lực</strong> của Đại học Quốc gia Hà Nội —
          lịch thi, cấu trúc đề, bộ tính điểm và tài liệu ôn tập.
        </p>

        {/* Countdown */}
        <div className="mb-8">
          <p className="text-hsa-green-dark text-sm uppercase tracking-widest mb-4 font-medium">
            Dự kiến đăng ký HSA 2027 còn
          </p>
          <div className="flex items-center justify-center gap-4">
            <Pad n={d} label="Ngày" />
            <span className="text-2xl text-hsa-green font-bold mb-6">:</span>
            <Pad n={h} label="Giờ" />
            <span className="text-2xl text-hsa-green font-bold mb-6">:</span>
            <Pad n={m} label="Phút" />
            <span className="text-2xl text-hsa-green font-bold mb-6">:</span>
            <Pad n={s} label="Giây" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#structure" className="bg-hsa-green text-white font-bold px-8 py-3 rounded-xl hover:bg-hsa-green-dark transition-colors">
            Cấu trúc đề thi
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { n: '121.010', label: 'Thí sinh dự thi' },
            { n: '96,6%', label: 'Tỉ lệ đến thi' },
            { n: '133/150', label: 'Điểm cao nhất' },
          ].map(s => (
            <div key={s.label} className="bg-black/10 rounded-xl p-3 text-center">
              <div className="text-xl font-black text-hsa-green-dark">{s.n}</div>
              <div className="text-xs text-hsa-green mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-hsa-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
