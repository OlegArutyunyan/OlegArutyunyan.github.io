import auth from '../../firebase'

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const useGoogleAuth = () => {

    const userAuthentication = async () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

        try {
            const res = await signInWithPopup(auth, provider)
                    console.log('raw result of user auth is ', res)
            const finalRes = _transformUserData(res)

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

    const _transformUserData = (res) => {
        return {
            id: res.user.uid,
            accessToken: res._tokenResponse.oauthAccessToken,
            name: res.user.displayName,
            photoURL: res.user.photoURL,
        }
    }

    return { userAuthentication }
}

export default useGoogleAuth
