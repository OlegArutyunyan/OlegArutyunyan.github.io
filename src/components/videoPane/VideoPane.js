import { Row, Col, Container } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecommendVideos, selectAll } from '../singleVideo/videoSlice'

import SingleVideo from '../singleVideo/SingleVideo'

import './videoPane.scss'
import store from '../../store/store'
import useYTApiServices from '../services/useYTApiServices'


const VideoPane = () => {
    const dispatch = useDispatch()
    const { videosLoadingStatus } = useSelector(state => state.videos)
    const { userAccessToken } = useSelector(state => state.user)
    const videos = selectAll(store.getState())

    const {userPersonalData} = useYTApiServices()

    useEffect(() => {
                console.log('useEffect videoPane')
        userPersonalData(userAccessToken)
        dispatch(fetchRecommendVideos())
        // eslint-disable-next-line
    }, [])

    const renderVideos = () => {
                console.log('videos array is ', videos)
        if (videosLoadingStatus === 'loading') {
            return (
                <span>Loading...</span>
            )
        }

        return videos.map((item, id) => {
                    console.log('mapping videos array with current item ', item)
            return (
                <Col lg={3} key={id}>
                    <SingleVideo video={item} />
                </Col>
            )
        })
    }

    const videoArray = renderVideos()

    return (
        <Container className="videoPane">
            <Row>
                {videoArray}
            </Row>
        </Container>
    )
}

export default VideoPane
