export default function VideoPlayer({ videoUrl, youtubeId }) {
  const embedUrl = youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : videoUrl
  
  return (
    <div style={containerStyle}>
      <iframe
        width="100%"
        height="100%"
        src={embedUrl}
        title="Video preview"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: '8px' }}
      />
    </div>
  )
}

const containerStyle = {
  width: '100%',
  aspectRatio: '16/9',
  background: '#000',
  borderRadius: '8px',
  overflow: 'hidden'
}
