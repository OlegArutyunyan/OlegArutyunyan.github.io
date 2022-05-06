
import './singleVideo.scss'

const SingleVideo = ({ video }) => {

  const id = video.id

  const link = `https://www.youtube.com/embed/${id}`
  return (
    <div className="singleVideo">
      <iframe
        width="100%"
        height="100%"
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    </div>
  )
}

export default SingleVideo
