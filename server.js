import express from 'express'
import { createRequire } from 'module'
import path from 'path'
import { fileURLToPath } from 'url'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

const RSS_URL = 'https://news.google.com/rss/search?q=HSA+%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c+%C4%90HQG+H%C3%A0+N%E1%BB%99i&hl=vi&gl=VN&ceid=VN:vi'

app.get('/api/news', async (req, res) => {
  try {
    const response = await fetch(RSS_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; XoaMuHSA/1.0)' },
    })
    const xml = await response.text()
    res.set('Content-Type', 'application/xml')
    res.set('Cache-Control', 'public, max-age=1800') // cache 30 phút
    res.send(xml)
  } catch (err) {
    res.status(502).json({ error: 'Cannot fetch news', detail: err.message })
  }
})

// Serve React build
app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
