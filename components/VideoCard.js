import Link from 'next/link'

export default function VideoCard({ video }) {
  return (
    <Link href={`/video/${video.id}`}>
      <div style={cardStyle}>
        <div style={thumbnailStyle}>
          <div style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem'
          }}>
            ▶
          </div>
          <span style={durationStyle}>{video.duration}</span>
        </div>
        <div style={{ padding: '12px' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '8px', lineHeight: '1.4' }}>
            {video.title}
          </h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '8px' }}>
            {video.instructor}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#3ea6ff', fontSize: '1.2rem', fontWeight: 'bold' }}>
              ${video.price}
            </span>
            <span style={{ color: '#aaa', fontSize: '0.85rem' }}>
              {video.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

const cardStyle = {
  background: '#1a1a1a',
  borderRadius: '8px',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  border: '1px solid #333'
}

const thumbnailStyle = {
  width: '100%',
  aspectRatio: '16/9',
  position: 'relative'
}

const durationStyle = {
  position: 'absolute',
  bottom: '8px',
  right: '8px',
  background: 'rgba(0,0,0,0.8)',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '0.85rem'
}
