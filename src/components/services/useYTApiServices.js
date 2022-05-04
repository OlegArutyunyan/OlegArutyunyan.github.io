import { useHttp } from "../../hooks/useHttp"
import firebase from 'firebase/app'
import auth from '../../firebase'

import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { _apikey } from "../../keys/keys"

const useYTApiServices = () => {
    const { request } = useHttp()

    const userAuthentication = async () => {
                console.log('start of userAuthentication function')
        
        const provider = new GoogleAuthProvider();
        
        try {
            const res = await signInWithPopup(auth, provider)
            const finalRes = _transformUserData(res.user)
                    console.log('results after userAuthentication function ', finalRes)
            return finalRes
        } catch (error) {
            console.log('error code ', error.code)
            console.log('error message ', error.message)
            console.log('error email ', error.email)
            console.log('error credential ', GoogleAuthProvider.credentialFromError(error))
        }
    }

    const recommendedVideos = async () => {
                console.log('execute recommendedVideos')
        const res = await request(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=id&chart=mostPopular&maxResults=2&regionCode=RU&key=${_apikey}`)
        const finalRes = res.items.map((item) => _transformVideos(item))
                console.log('final results: ', finalRes)
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

    return { recommendedVideos, userAuthentication }
}

export default useYTApiServices
