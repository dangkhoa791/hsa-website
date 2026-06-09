import { useState, useEffect } from 'react'

const links = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Quy đổi điểm', href: '#score-converter' },
  { label: 'Cấu trúc đề', href: '#structure' },
  { label: 'Lịch thi', href: '#schedule' },
  { label: 'Đăng ký', href: '#registration' },
  { label: 'Cộng đồng', href: '#community' },
  { label: 'Tin tức', href: '#news' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = links.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i])
          return
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`} style={{backgroundColor:'#0f172a'}}>
      <div className="section-container flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-xl font-black" style={{color:'#f1f5f9'}}>XOÁ MÙ</span>
          <span className="text-xl font-black" style={{color:'#38bdf8'}}>HSA</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                backgroundColor: active === l.href ? '#38bdf8' : 'transparent',
                color: active === l.href ? '#0f172a' : '#f1f5f9',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg"
          style={{color:'#f1f5f9'}}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t shadow-lg" style={{backgroundColor:'#0f172a', borderColor:'#1e293b'}}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-medium border-b hover:opacity-70"
              style={{color:'#f1f5f9', borderColor:'#1e293b'}}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
