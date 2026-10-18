import Link from 'next/link'

export default function PriceCard({ video }) {
  return (
    <div style={cardStyle}>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>
        ${video.price}
      </div>
      <Link href={`/checkout?videoId=${video.id}`}>
        <button style={buyButtonStyle}>Buy Now</button>
      </Link>
      <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #333' }}>
        <h4 style={{ marginBottom: '10px' }}>This course includes:</h4>
        <ul style={{ color: '#aaa', lineHeight: '2' }}>
          <li>✓ Lifetime access</li>
          <li>✓ Full HD video quality</li>
          <li>✓ Downloadable resources</li>
          <li>✓ Certificate of completion</li>
        </ul>
      </div>
    </div>
  )
}

const cardStyle = {
  background: '#1a1a1a',
  border: '1px solid #333',
  borderRadius: '8px',
  padding: '20px',
  position: 'sticky',
  top: '80px'
}

const buyButtonStyle = {
  width: '100%',
  padding: '14px',
  background: '#3ea6ff',
  border: 'none',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  cursor: 'pointer'
}
