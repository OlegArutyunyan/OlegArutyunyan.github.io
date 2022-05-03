import { useHttp } from "../../hooks/useHttp"

const useYTApiServices = () => {
    const {request} = useHttp()
    const _apikey = 'AIzaSyCzpQmIEwDSGb3J22rmHqQvIlvdfNpunPU'

    const recommendedVideos = async () => {
                console.log('execute recommendedVideos')
        const res = await request(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=id&chart=mostPopular&maxResults=2&regionCode=RU&key=${_apikey}`) 
        const finalRes = res.items.map((item) => transformVideos(item))
                console.log('final results: ', finalRes)
        return finalRes
    }

    const transformVideos = (video) => {
        return {
            id: video.id
        }
    }

    return {recommendedVideos}
}

export default useYTApiServices
