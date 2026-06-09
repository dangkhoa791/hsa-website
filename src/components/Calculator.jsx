import { useState } from 'react'

const TOTAL = 150
const SECTIONS = [
  { id: 'math', label: '📐 Toán học & Xử lý số liệu', total: 50 },
  { id: 'lang', label: '📚 Văn học – Ngôn ngữ', total: 50 },
  { id: 'sci', label: '🔬 Khoa học / Tiếng Anh', total: 50 },
]

const MSGS = {
  great: [
    'Học bá chính hiệu rồi đó! Cứ thế mà flex thôi bro 👑',
    'Score này thì apply đâu chả được. Quá chill luôn! 🔥',
    'Bạn đang ở tier S rồi, không cần cày thêm nữa đâu 💎',
    'Xuất sắc vl! Cả xóm tự hào về mày đó! 🏆',
  ],
  good: [
    'Đang trên đà bứt phá rồi đó. Tiếp tục đi, sắp lên tier S! 🚀',
    'Solid lắm! Chỉ cần ôn thêm điểm yếu là xong 💪',
    'Good game bro! Không dừng lại được đâu, gần đỉnh rồi 📈',
    'Very nice! Một tí nữa thôi là flex cả xóm được rồi ✨',
  ],
  mid: [
    'Mid nhưng potential cao lắm nha. Chưa đến lúc gg đâu! 🌱',
    'Cần cày thêm một xíu thôi. Mày làm được, tin mày! 💡',
    'Đang average nhưng mà average của dân thi HSA cũng không tệ đâu 😤',
    'Chưa peak form thôi. Reset và grind lại đi bro! 🔄',
  ],
  low: [
    'Fail is just First Attempt In Learning. Reset rồi cày lại nào! 💪',
    'Chưa phải lúc panic đâu, vẫn còn time để cày mà! ⏰',
    'Bước 1: Không stress. Bước 2: Ôn lại kiến thức. Bước 3: Flex 😤',
    'Mỗi đề sai là một bài học. Bro đang học nhanh lắm đó! 📚',
  ],
}

function getMessage(score) {
  const bucket = score >= 120 ? 'great' : score >= 90 ? 'good' : score >= 60 ? 'mid' : 'low'
  const arr = MSGS[bucket]
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function Calculator() {
  const [answers, setAnswers] = useState({ math: '', lang: '', sci: '' })
  const [result, setResult] = useState(null)
  const [msg, setMsg] = useState('')

  const setAns = (id, val) => {
    const max = SECTIONS.find(s => s.id === id).total
    const n = Math.max(0, Math.min(max, Number(val) || 0))
    setAnswers(prev => ({ ...prev, [id]: val === '' ? '' : n }))
  }

  const calculate = () => {
    const score = SECTIONS.reduce((acc, s) => acc + (Number(answers[s.id]) || 0), 0)
    setResult(Math.min(TOTAL, score))
    setMsg(getMessage(Math.min(TOTAL, score)))
  }

  const reset = () => {
    setAnswers({ math: '', lang: '', sci: '' })
    setResult(null)
    setMsg('')
  }

  const pct = result !== null ? (result / TOTAL) * 100 : 0

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="section-container max-w-2xl">
        <h2 className="section-title text-gray-800">Bộ tính điểm HSA</h2>
        <p className="section-subtitle">
          Mỗi câu đúng = <strong>1 điểm</strong> · Tổng tối đa <strong>150 điểm</strong> · Không trừ điểm sai
        </p>

        <div className="card mb-6">
          <div className="space-y-4">
            {SECTIONS.map(s => (
              <div key={s.id}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {s.label}{' '}
                  <span className="text-gray-400 font-normal">(0 – {s.total} câu đúng)</span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={0}
                    max={s.total}
                    value={answers[s.id]}
                    onChange={e => setAns(s.id, e.target.value)}
                    placeholder={`0 – ${s.total}`}
                    className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-lg font-bold text-center focus:outline-none focus:ring-2 focus:ring-hsa-red"
                  />
                  <span className="text-gray-400 text-sm w-16 text-center">/ {s.total} câu</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tổng live */}
          <div className="mt-5 flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-600">
            <span>Tổng câu đúng dự kiến:</span>
            <span className="text-xl font-black text-hsa-red">
              {SECTIONS.reduce((a, s) => a + (Number(answers[s.id]) || 0), 0)}
              <span className="text-sm text-gray-400 font-normal"> / 150</span>
            </span>
          </div>

          <div className="flex gap-3 mt-4">
            <button onClick={calculate} className="flex-1 btn-primary text-center">
              Tính điểm
            </button>
            <button
              onClick={reset}
              className="px-4 py-3 border border-gray-200 rounded-xl text-gray-500 hover:border-hsa-red hover:text-hsa-red transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Result */}
        {result !== null && (
          <div className="card border-2 border-hsa-red animate-fade-in text-center">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest font-medium">Điểm HSA ước tính</p>
            <div className="text-6xl font-black text-hsa-red mb-1">{result}</div>
            <div className="text-gray-400 text-sm mb-6">/ {TOTAL} điểm</div>

            <div className="bg-gray-100 rounded-full h-4 mb-2 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-hsa-red to-hsa-gold transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-6">
              <span>0</span>
              <span>79 (TB 2026)</span>
              <span>150</span>
            </div>

            <div className="bg-red-50 rounded-xl p-4 text-hsa-red font-semibold text-sm">{msg}</div>

            <p className="text-xs text-gray-400 mt-4">
              * Điểm thực tế do ban tổ chức tính chính thức. Kết quả ở đây chỉ mang tính tham khảo.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
