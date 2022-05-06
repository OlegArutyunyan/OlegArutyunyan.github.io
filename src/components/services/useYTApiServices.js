import { useHttp } from "../../hooks/useHttp"

import { _apikey } from "../../keys/keys"

const useYTApiServices = () => {
    const { request } = useHttp()

    const userPersonalData = async (token) => {

        const customHeader = {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }

        console.log('custom header ', customHeader)
        const res = await request(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=50&mine=true&key=${_apikey}`, 'GET', null, customHeader)
        console.log ('User subscriptions ', res)
    }

    const recommendedVideos = async () => {
        const res = await request(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=id&chart=mostPopular&maxResults=2&regionCode=RU&key=${_apikey}`)
        const finalRes = res.items.map((item) => _transformVideos(item))
        return finalRes
    }

    const _transformVideos = (video) => {
        return {
            id: video.id
        }
    }

    return { recommendedVideos, userPersonalData }
}

export default useYTApiServices
