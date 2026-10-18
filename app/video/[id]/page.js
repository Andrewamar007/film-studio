import { videos } from '@/data/videos'
import VideoPlayer from '@/components/VideoPlayer'
import PriceCard from '@/components/PriceCard'

export default function VideoPage({ params }) {
  const video = videos.find(v => v.id === parseInt(params.id))

  if (!video) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Video not found</div>
  }

  return (
    <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px' }}>
        <div>
          <VideoPlayer youtubeId={video.youtubeId} />
          <h1 style={{ fontSize: '1.8rem', margin: '20px 0 10px' }}>{video.title}</h1>
          <p style={{ color: '#aaa', marginBottom: '10px' }}>
            {video.instructor} • {video.duration} • {video.category}
          </p>
          <p style={{ lineHeight: '1.6', color: '#ccc' }}>{video.description}</p>
        </div>
        <PriceCard video={video} />
      </div>
    </main>
  )
}
