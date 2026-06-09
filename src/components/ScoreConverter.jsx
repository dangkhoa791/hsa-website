import { useState } from 'react'

// Bảng bách phân vị ước tính từ phổ điểm HSA 2026
// (mean=79,39 · median=79 · std=15 · max=133)
// Định dạng: [điểm tối thiểu, % thí sinh đạt điểm THẤP HƠN]
const PERCENTILE_TABLE = [
  [130, 99], [125, 98], [120, 97], [115, 96], [110, 94],
  [105, 91], [100, 87], [97, 84],  [94, 80],  [91, 76],
  [88, 72],  [85, 66],  [82, 60],  [79, 54],  [76, 47],
  [73, 40],  [70, 33],  [67, 27],  [64, 22],  [61, 17],
  [58, 13],  [55, 10],  [52, 7],   [49, 5],   [45, 3],
  [40, 2],   [30, 1],   [0, 0],
]

function getPercentile(score) {
  for (const [min, p] of PERCENTILE_TABLE) {
    if (score >= min) return p
  }
  return 0
}

function getRank(p) {
  if (p >= 95) return { label: 'Xuất sắc',     color: '#15803d', bg: '#dcfce7', emoji: '🏆' }
  if (p >= 80) return { label: 'Giỏi',          color: '#1d4ed8', bg: '#dbeafe', emoji: '⭐' }
  if (p >= 60) return { label: 'Khá',            color: '#7c3aed', bg: '#ede9fe', emoji: '👍' }
  if (p >= 40) return { label: 'Trung bình',     color: '#b45309', bg: '#fef3c7', emoji: '📊' }
  return       { label: 'Cần cố gắng',          color: '#b91c1c', bg: '#fee2e2', emoji: '💪' }
}

export default function ScoreConverter() {
  const [score, setScore] = useState(79)
  const [touched, setTouched] = useState(false)

  const safeScore = Math.max(0, Math.min(150, Number(score) || 0))
  const percentile = getPercentile(safeScore)
  const rank = getRank(percentile)
  const scale30 = (safeScore / 150 * 30).toFixed(2).replace('.', ',')

  const handleInput = (val) => {
    setScore(val)
    setTouched(true)
  }

  return (
    <section id="score-converter" className="py-20 bg-white">
      <div className="section-container max-w-3xl">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-hsa-green text-white text-xs font-black px-4 py-1 rounded-full tracking-widest uppercase mb-3">
            Quy đổi điểm
          </span>
          <h2 className="section-title text-gray-800">Tra cứu Bách phân vị & Thang 30</h2>
          <p className="section-subtitle">
            Nhập điểm HSA để xem vị trí của bạn trong phổ điểm 2026 và điểm quy đổi tham khảo
          </p>
        </div>

        {/* Thống kê phổ điểm */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'Thang điểm', value: '150', sub: '150 câu × 1 điểm' },
            { label: 'Trung bình 2026', value: '79,39', sub: '/150 điểm' },
            { label: 'Trung vị 2026', value: '79,0', sub: '50% thí sinh' },
            { label: 'Điểm cao nhất', value: '133', sub: 'năm 2026' },
          ].map(s => (
            <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
              <div className="text-xl font-black text-hsa-green">{s.value}</div>
              <div className="text-xs font-semibold text-gray-700 mt-0.5">{s.label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Tool tra cứu */}
        <div className="card p-6 mb-5 border-2 border-hsa-light">
          <div className="font-bold text-gray-800 text-base mb-4">🔢 Nhập điểm HSA của bạn</div>

          {/* Input + slider */}
          <div className="flex items-center gap-3 mb-3">
            <input
              type="number" min="0" max="150"
              value={score}
              onChange={e => handleInput(e.target.value)}
              placeholder="VD: 95"
              className="flex-1 border-2 border-hsa-light rounded-xl px-4 py-3 text-xl font-black text-hsa-green text-center outline-none focus:border-hsa-green transition-colors"
            />
            <span className="text-gray-400 text-sm whitespace-nowrap">/ 150</span>
          </div>

          <input
            type="range" min="0" max="150" step="1"
            value={safeScore}
            onChange={e => handleInput(Number(e.target.value))}
            className="w-full mb-1 cursor-pointer accent-hsa-green"
          />
          <div className="flex justify-between text-xs text-gray-400 mb-5">
            <span>0</span><span>50</span><span>100</span><span>150</span>
          </div>

          {/* Kết quả */}
          {touched && (
            <div>
              {/* Badge xếp loại */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-sm mb-4"
                style={{ background: rank.bg, color: rank.color, border: `1.5px solid ${rank.color}33` }}
              >
                {rank.emoji} {rank.label}
              </div>

              {/* Progress bar */}
              <div className="text-sm font-semibold text-gray-700 mb-1.5">Vị trí trong phổ điểm 2026:</div>
              <div className="relative bg-gray-200 rounded-full h-5 overflow-visible mb-1">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${percentile}%`, background: 'linear-gradient(90deg,#007f3e,#003d1f)' }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-0.5 h-7 bg-gray-800 rounded transition-all duration-500"
                  style={{ left: `calc(${percentile}% - 1px)` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mb-5">
                <span>← Thấp hơn</span><span>Cao hơn →</span>
              </div>

              {/* 4 thẻ kết quả */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-xs text-gray-400 mb-1">Điểm HSA</div>
                  <div className="text-2xl font-black text-hsa-green">{safeScore}</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 text-center border-2 border-amber-200">
                  <div className="text-xs text-amber-700 mb-1">⚖️ Quy đổi thang 30</div>
                  <div className="text-2xl font-black text-amber-600">{scale30}<span className="text-sm font-semibold text-amber-500"> /30</span></div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-xs text-gray-400 mb-1">Bách phân vị</div>
                  <div className="text-2xl font-black text-hsa-green">Top {100 - percentile}%</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-xs text-gray-400 mb-1">Cao hơn</div>
                  <div className="text-2xl font-black text-hsa-green">{percentile}%<span className="text-sm font-semibold text-gray-400"> thí sinh</span></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Công thức 2 cách */}
        <div className="card p-6 mb-5">
          <div className="font-bold text-gray-800 text-base mb-1">📐 Công thức quy đổi sang thang 30 — 2 cách</div>
          <div className="text-xs text-gray-500 mb-4">Tùy trường áp dụng phương pháp nào, kết quả có thể khác nhau</div>

          {/* Cách 1 */}
          <div className="border border-blue-200 rounded-xl p-4 mb-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">Cách 1</span>
              <span className="font-semibold text-gray-800 text-sm">Công thức tuyến tính (phổ biến)</span>
            </div>
            {/* Công thức hiển thị */}
            <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-center gap-3 flex-wrap mb-3">
              <span className="font-black text-hsa-green text-lg">Thang 30</span>
              <span className="text-gray-400 text-xl">=</span>
              <div className="text-center">
                <div className="border-b-2 border-hsa-green pb-1 mb-1 font-bold text-hsa-green">Điểm HSA</div>
                <div className="font-bold text-hsa-green">150</div>
              </div>
              <span className="text-gray-400 text-xl">×</span>
              <span className="font-black text-amber-500 text-xl">30</span>
            </div>
            {/* Ví dụ */}
            <div className="grid grid-cols-3 gap-2 text-center mb-3">
              {[['70đ','= 14,0'],['95đ','= 19,0'],['120đ','= 24,0']].map(([in_, out]) => (
                <div key={in_} className="bg-green-50 rounded-lg py-1.5">
                  <div className="text-xs text-gray-500">{in_}</div>
                  <div className="text-sm font-bold text-hsa-green">{out} / 30</div>
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-500">✔ Dễ tính, nhiều trường áp dụng. Kết quả mang tính ước tính.</div>
          </div>

          {/* Cách 2 */}
          <div className="border border-amber-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">Cách 2</span>
              <span className="font-semibold text-gray-800 text-sm">Phương pháp bách phân vị (Bộ GD&ĐT)</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              Theo <strong>Công văn 2457/BGDĐT-GDĐH ngày 19/5/2025</strong>, Bộ GD&ĐT yêu cầu quy đổi dựa trên{' '}
              <strong>phân bố bách phân vị</strong> — điểm ở cùng bách phân vị giữa 2 phương thức mới được xem là tương đương.
              Kết quả <strong>khác với công thức tuyến tính</strong> và thay đổi theo tổ hợp môn.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              <strong>Ví dụ thực tế:</strong> 100 điểm HSA (top ~13%) ≈ 22,5–23,5 điểm tổ hợp A00 — cao hơn công thức tuyến tính cho ra (100 ÷ 150 × 30 = 20,0).
            </p>
            <div className="text-xs text-amber-700">✔ Phương pháp chính xác hơn. Mỗi trường tự xây bảng theo hướng dẫn của Bộ.</div>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 mt-3 text-xs text-gray-500">
            💡 <strong>Gợi ý:</strong> Tra cứu bảng quy đổi chính thức tại website của trường bạn muốn xét tuyển — mỗi trường công bố bảng riêng sau khi có phổ điểm.
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 flex gap-3">
          <span className="text-xl flex-shrink-0">⚠️</span>
          <div className="text-sm text-amber-800 leading-relaxed">
            <strong>Lưu ý quan trọng:</strong> Số liệu bách phân vị và điểm quy đổi thang 30 trên đây{' '}
            <strong>chỉ mang tính tham khảo</strong>, được ước tính dựa trên phổ điểm HSA 2026 (mean=79,39 · std=15).
            Theo Công văn 2457/BGDĐT-GDĐH (19/5/2025), Bộ GD&ĐT yêu cầu quy đổi theo phương pháp bách phân vị —{' '}
            <strong>mỗi trường tự xây dựng bảng quy đổi riêng</strong> dựa trên tổ hợp môn và phổ điểm thực tế.
            Kết quả thực tế có thể khác đáng kể. Phổ điểm chính thức tại{' '}
            <a href="https://hsa.edu.vn" target="_blank" rel="noopener noreferrer" className="text-hsa-green underline font-semibold">hsa.edu.vn</a>.
          </div>
        </div>

      </div>
    </section>
  )
}
