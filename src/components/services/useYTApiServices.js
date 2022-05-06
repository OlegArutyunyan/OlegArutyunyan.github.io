import { useHttp } from "../../hooks/useHttp"
import auth from '../../firebase'

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { _apikey } from "../../keys/keys"
import { useSelector } from "react-redux";

const useYTApiServices = () => {
    const { request } = useHttp()

    const userAuthentication = async () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

        try {
            const res = await signInWithPopup(auth, provider)
                    console.log('raw result of user auth is ', res)
            const finalRes = _transformUserData(res.user)

            sessionStorage.setItem('user-access-token', finalRes.accessToken)
            sessionStorage.setItem('user-data', JSON.stringify(finalRes))

            return finalRes
        } catch (error) {
            console.log('error code ', error.code)
            console.log('error message ', error.message)
            console.log('error email ', error.email)
            console.log('error credential ', GoogleAuthProvider.credentialFromError(error))
        }
    }

    const userPersonalData = async (token) => {

        const customHeader = {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }

        console.log('custom header ', customHeader)
        const res = await request(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=50&mine=true&key=${_apikey}`, 'GET', null, customHeader)
        // const res = await request(`https://www.googleapis.com/youtube/v3/channels?part=id&mine=true&access_token=${token}`, 'GET', null, customHeader)
        console.log ('User subscriptions ', res)
    }

    const recommendedVideos = async () => {
        const res = await request(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=id&chart=mostPopular&maxResults=2&regionCode=RU&key=${_apikey}`)
        const finalRes = res.items.map((item) => _transformVideos(item))
        return finalRes
    }

    const _transformUserData = (user) => {
        return {
            id: user.uid,
            accessToken: user.accessToken,
            name: user.displayName,
            photoURL: user.photoURL,
        }
    }

    const _transformVideos = (video) => {
        return {
            id: video.id
        }
    }

    return { recommendedVideos, userAuthentication, userPersonalData }
}

export default useYTApiServices
