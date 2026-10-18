import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link href="/">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>VideoMarket</h2>
        </Link>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/" style={linkStyle}>Home</Link>
          <Link href="/#" style={linkStyle}>My Courses</Link>
        </div>
      </div>
    </nav>
  )
}

const navStyle = {
  background: '#000',
  borderBottom: '1px solid #333',
  padding: '15px 20px',
  position: 'sticky',
  top: 0,
  zIndex: 100
}

const containerStyle = {
  maxWidth: '1400px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const linkStyle = {
  color: '#fff',
  fontSize: '1rem',
  transition: 'color 0.2s'
}
