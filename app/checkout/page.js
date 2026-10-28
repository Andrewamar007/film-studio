'use client'
import { useSearchParams } from 'next/navigation'
import { videos } from '@/data/videos'

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const videoId = searchParams.get('videoId')
  const video = videos.find(v => v.id === parseInt(videoId))

  if (!video) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Invalid video</div>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Payment processing... (Demo only)')
  }

  return (
    <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Checkout</h1>
      <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>{video.title}</h3>
        <p style={{ color: '#aaa', margin: '10px 0' }}>Instructor: {video.instructor}</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${video.price}</p>
      </div>
      <form onSubmit={handleSubmit} style={{ background: '#1a1a1a', padding: '20px', borderRadius: '8px' }}>
        <input type="email" placeholder="Email" required style={inputStyle} />
        <input type="text" placeholder="Card Number" required style={inputStyle} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <input type="text" placeholder="MM/YY" required style={inputStyle} />
          <input type="text" placeholder="CVV" required style={inputStyle} />
        </div>
        <button type="submit" style={buttonStyle}>Complete Purchase</button>
      </form>
    </main>
  )
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '10px',
  background: '#2a2a2a',
  border: '1px solid #444',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '1rem'
}

const buttonStyle = {
  width: '100%',
  padding: '12px',
  background: '#3ea6ff',
  border: 'none',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer'
}
