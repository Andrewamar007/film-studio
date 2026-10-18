import { videos } from '@/data/videos'
import VideoCard from '@/components/VideoCard'

export default function Home() {
  return (
    <main style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '30px' }}>Premium Video Courses</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '20px' 
      }}>
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </main>
  )
}
