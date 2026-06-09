const facts = [
  { icon: '🏛️', title: 'Đơn vị tổ chức', desc: 'Viện Đào tạo Số & Khảo thí – ĐHQG Hà Nội (VNU-IDT)' },
  { icon: '📝', title: 'Số câu hỏi', desc: '150 câu chia đều 3 phần, bao gồm trắc nghiệm và điền đáp án' },
  { icon: '⏱️', title: 'Thời gian thi', desc: '195 phút (3 giờ 15 phút) – thi trên máy tính' },
  { icon: '🎯', title: 'Thang điểm', desc: 'Tối đa 150 điểm – mỗi câu đúng 1 điểm, không trừ điểm sai' },
  { icon: '🔄', title: 'Số lần thi', desc: 'Tối đa 2 lần/năm, cách nhau ít nhất 28 ngày' },
  { icon: '🌏', title: 'Địa điểm thi', desc: 'Hà Nội, Hải Phòng, Ninh Bình, Hưng Yên, Thái Nguyên, Thanh Hoá, Nghệ An, Hà Tĩnh' },
]

export default function About() {
  return (
    <section id="about" className="py-20" style={{backgroundColor:'#e8f5e2'}}>
      <div className="section-container">
        <h2 className="section-title text-gray-800">HSA là gì?</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          <strong>HSA</strong> (Higher Education Assessment) – Kỳ thi Đánh giá Năng lực của ĐHQG Hà Nội.
          Kết quả được nhiều trường đại học top đầu cả nước dùng để xét tuyển.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facts.map(f => (
            <div key={f.title} className="card hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Phổ điểm 2026 */}
        <div className="bg-gradient-to-r from-hsa-red to-hsa-dark rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-6 text-center">📊 Phổ điểm HSA 2026</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Điểm trung bình', value: '79,39' },
              { label: 'Điểm trung vị', value: '79,0' },
              { label: 'Độ lệch chuẩn', value: '15,0' },
              { label: 'Điểm cao nhất', value: '133' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-black text-hsa-gold">{s.value}</div>
                <div className="text-sm text-red-200 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-red-200 text-sm mt-4">
            Dữ liệu từ 121.010 lượt thí sinh, 6 đợt thi năm 2026
          </p>
        </div>
      </div>
    </section>
  )
}
