
import './singleVideo.scss'

function SingleVideo() {
  return (
    <div className="singleVideo">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/tItyqnFL2Qs" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default SingleVideo
