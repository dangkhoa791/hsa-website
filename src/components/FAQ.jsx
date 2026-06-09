import { useState, useRef } from 'react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzFz54m3AVVd8Z-kifFQykxqRyDzakBVB6YccaCsqMTyt1x1qZY2bPXkEQ4rhWy1GRQ/exec'

function QuestionForm({ source }) {
  const [question, setQuestion] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  const submit = async (e) => {
    e.preventDefault()
    if (!question.trim()) return
    setStatus('sending')
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: question.trim(),
          source,
          date: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
        }),
      })
      setStatus('done')
      setQuestion('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-hsa-green p-6">
      <h3 className="font-bold text-gray-800 text-lg mb-1">
        🎬 Bạn muốn tôi làm video giải đáp về thắc mắc nào?
      </h3>
      <p className="text-gray-500 text-sm mb-5">
        Gửi câu hỏi — tôi sẽ ưu tiên làm video về những chủ đề được hỏi nhiều nhất!
      </p>

      {status === 'done' ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <div className="text-2xl mb-1">🎉</div>
          <p className="text-green-700 font-semibold">Đã nhận câu hỏi của bạn!</p>
          <p className="text-green-600 text-sm mt-1">Cảm ơn bạn đã gửi — mình sẽ cố gắng làm video sớm nhất!</p>
          <button onClick={() => setStatus('idle')} className="mt-3 text-sm text-green-600 underline">
            Gửi câu hỏi khác
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-3">
          <textarea
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="Ví dụ: Phần thi Khoa học nên chọn môn nào? Cách ôn Toán HSA hiệu quả?..."
            rows={3}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none"
            style={{'--tw-ring-color': '#007f3e'}}
            disabled={status === 'sending'}
          />
          {status === 'error' && (
            <p className="text-red-500 text-xs">Có lỗi xảy ra, vui lòng thử lại.</p>
          )}
          <button
            type="submit"
            disabled={status === 'sending' || !question.trim()}
            className="w-full font-bold py-3 rounded-xl text-white transition-colors disabled:opacity-50"
            style={{backgroundColor:'#007f3e'}}
          >
            {status === 'sending' ? 'Đang gửi...' : 'Gửi câu hỏi →'}
          </button>
        </form>
      )}
    </div>
  )
}

const faqs = [
  {
    q: 'HSA là gì và do đơn vị nào tổ chức?',
    a: 'HSA (Higher Education Assessment) là kỳ thi Đánh giá Năng lực do Viện Đào tạo Số & Khảo thí (VNU-IDT) thuộc Đại học Quốc gia Hà Nội tổ chức. Kết quả HSA được hàng trăm trường đại học sử dụng để xét tuyển.',
  },
  {
    q: 'Ai được phép dự thi HSA?',
    a: 'Tất cả học sinh đã hoàn thành chương trình THPT hoặc đang học lớp 12 đều có thể đăng ký. Thí sinh có thể thi tối đa 2 lần/năm (cách nhau ít nhất 28 ngày).',
  },
  {
    q: 'Bài thi HSA gồm bao nhiêu phần và thời gian bao lâu?',
    a: 'Bài thi gồm 3 phần: (1) Toán học & Xử lý số liệu – 50 câu – 75 phút; (2) Văn học – Ngôn ngữ – 50 câu – 60 phút; (3) Khoa học hoặc Tiếng Anh – 50 câu – 60 phút. Tổng 150 câu – 195 phút, thi trên máy tính.',
  },
  {
    q: 'Thang điểm HSA như thế nào?',
    a: 'Điểm HSA từ 0 đến 150 điểm – mỗi câu đúng 1 điểm, không trừ điểm sai. Điểm trung bình năm 2026 là 79,39/150. Điểm cao nhất đạt 133/150.',
  },
  {
    q: 'Phần thi Khoa học khác Tiếng Anh như thế nào? Nên chọn hướng nào?',
    a: 'Hướng Khoa học: thí sinh chọn 3 trong 5 môn (Vật lí, Hóa học, Sinh học, Lịch sử, Địa lí). Hướng Tiếng Anh: 50 câu Tiếng Anh hoàn toàn. Điểm cao nhất 2026 (133) thuộc hướng Tiếng Anh. Nên chọn hướng mà bạn có lợi thế nhất.',
  },
  {
    q: 'Câu điền đáp án ở phần Toán có khác trắc nghiệm không?',
    a: 'Phần Toán có 15 câu điền đáp án (không có lựa chọn A/B/C/D). Thí sinh phải tự tính và nhập kết quả vào ô trên máy tính. Không được đoán mò vì không có đáp án để chọn. Đây là điểm đặc thù của kỳ thi HSA.',
  },
  {
    q: 'Kết quả HSA 2026 đã công bố chưa?',
    a: 'Đã công bố. ĐHQG Hà Nội công bố phổ điểm ngày 29/05/2026 sau khi kết thúc đợt 6 (24/05/2026). Thí sinh có thể tra cứu điểm tại hsa.edu.vn.',
  },
  {
    q: 'Làm thế nào để tra cứu điểm và đăng ký thi HSA?',
    a: 'Truy cập trang chính thức tại hsa.edu.vn để đăng ký tài khoản, đăng ký lịch thi và tra cứu điểm. Lệ phí thi và địa điểm thi sẽ được thông báo khi đăng ký.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="section-container max-w-3xl">
        <h2 className="section-title text-gray-800">Câu hỏi thường gặp</h2>
        <p className="section-subtitle">Giải đáp những thắc mắc phổ biến về kỳ thi HSA</p>

        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <div key={i} className="card overflow-hidden p-0">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 pr-4">{f.q}</span>
                <svg
                  className={`w-5 h-5 text-hsa-red flex-shrink-0 mt-0.5 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <QuestionForm source="HSA" />
      </div>
    </section>
  )
}
