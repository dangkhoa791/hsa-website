import { useState, useEffect, useRef } from 'react'

const RSS_URL = 'https://news.google.com/rss/search?q=HSA+%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c+%C4%90HQG+H%C3%A0+N%E1%BB%99i&hl=vi&gl=VN&ceid=VN:vi'
const NEWS_API = `https://api.allorigins.win/raw?url=${encodeURIComponent(RSS_URL)}`
const INTERVAL = 30 * 60 * 1000
const PREVIEW = 4

function getTag(title) {
  const t = title.toLowerCase()
  if (t.includes('kết quả') || t.includes('công bố điểm') || t.includes('phổ điểm')) return { label: 'KẾT QUẢ', cls: 'bg-green-100 text-green-700' }
  if (t.includes('đăng ký') || t.includes('tuyển sinh')) return { label: 'TUYỂN SINH', cls: 'bg-orange-100 text-orange-700' }
  if (t.includes('thông báo') || t.includes('lịch thi')) return { label: 'THÔNG BÁO', cls: 'bg-blue-100 text-blue-700' }
  if (t.includes('ôn thi') || t.includes('đề thi') || t.includes('cấu trúc')) return { label: 'ÔN THI', cls: 'bg-purple-100 text-purple-700' }
  return { label: 'TIN TỨC', cls: 'bg-indigo-100 text-indigo-700' }
}

function parseRSS(xml) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xml, 'text/xml')
  return Array.from(doc.querySelectorAll('item')).map(item => ({
    title: item.querySelector('title')?.textContent || '',
    link: item.querySelector('link')?.textContent || '',
    pub: item.querySelector('pubDate')?.textContent || '',
    source: item.querySelector('source')?.textContent || '',
  }))
}

export default function News() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(null)
  const seenUrls = useRef(new Set())
  const seenTitles = useRef(new Set())

  const fetchNews = async (isRefresh = false) => {
    try {
      const res = await fetch(NEWS_API)
      const xml = await res.text()
      const newItems = parseRSS(xml)

      setItems(prev => {
        const merged = [...prev]
        const added = []
        for (const item of newItems) {
          const titleKey = item.title.slice(0, 40)
          if (seenUrls.current.has(item.link) || seenTitles.current.has(titleKey)) continue
          seenUrls.current.add(item.link)
          seenTitles.current.add(titleKey)
          added.push({ ...item, isNew: isRefresh })
        }
        return [...added, ...merged]
      })
      setLastUpdate(new Date())
    } catch (e) {
      console.error('News fetch error', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews(false)
    const id = setInterval(() => fetchNews(true), INTERVAL)
    return () => clearInterval(id)
  }, [])

  // clear isNew after 10s
  useEffect(() => {
    if (!items.some(i => i.isNew)) return
    const id = setTimeout(() => setItems(prev => prev.map(i => ({ ...i, isNew: false }))), 10000)
    return () => clearTimeout(id)
  }, [items])

  const visible = expanded ? items : items.slice(0, PREVIEW)

  return (
    <section id="news" className="py-20 bg-white">
      <div className="section-container">
        <div className="flex items-center justify-between mb-2">
          <h2 className="section-title text-gray-800 mb-0">Tin tức HSA</h2>
          {lastUpdate && (
            <span className="text-xs text-gray-400">
              Cập nhật: {lastUpdate.toLocaleTimeString('vi-VN')}
            </span>
          )}
        </div>
        <p className="section-subtitle">Tự động cập nhật từ Google News mỗi 30 phút</p>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-4 border-hsa-red border-t-transparent rounded-full animate-spin" />
          </div>
        ) : items.length === 0 ? (
          <div className="text-center text-gray-500 py-16">Không tìm thấy tin tức. Vui lòng thử lại sau.</div>
        ) : (
          <>
            <div className="space-y-3">
              {visible.map((item, i) => {
                const tag = getTag(item.title)
                const date = item.pub ? new Date(item.pub).toLocaleDateString('vi-VN') : ''
                return (
                  <a
                    key={item.link + i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 card hover:shadow-lg transition-shadow group animate-fade-in"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`badge ${tag.cls} text-xs`}>{tag.label}</span>
                        {item.isNew && (
                          <span className="badge bg-hsa-red text-white text-xs badge-new">MỚI</span>
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-hsa-red transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                        {item.source && <span>{item.source}</span>}
                        {date && <><span>·</span><span>{date}</span></>}
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-hsa-red transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )
              })}
            </div>

            {items.length > PREVIEW && (
              <div className="mt-6 text-center">
                {expanded ? (
                  <button
                    onClick={() => { setExpanded(false); document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="btn-outline"
                  >
                    Thu gọn ↑
                  </button>
                ) : (
                  <button onClick={() => setExpanded(true)} className="btn-primary">
                    Xem thêm {items.length - PREVIEW} tin ↓
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
