import { Row, Col, Container } from 'react-bootstrap'

import SingleVideo from '../singleVideo/SingleVideo'
import yt_video_template from '../../img/yt_video_template.png'

import './videoPane.scss'

const VideoPane = () => {
    const videoArray = [...Array(10)].map(() => (
        <Col lg={3}>
            <SingleVideo/>
        </Col>
    ))

    console.log(videoArray)

    return (
        <Container className="videoPane">
            <Row>
                {videoArray}
            </Row>
        </Container>
    )
}

export default VideoPane
