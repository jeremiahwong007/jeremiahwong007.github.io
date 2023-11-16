import background_vid from './my-background-video.mp4'
import './styles.css'

const BackgroundVideo = () => {
    return <>
        <video className='my-video hidden sm:block' autoPlay loop muted>
            <source src={background_vid} type="video/mp4"></source>
        </video>
    </>
}

export default BackgroundVideo;