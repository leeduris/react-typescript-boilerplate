let endpoints = {
    // SSO
    LOGIN: '/sso/verifyuser',
    UPDATE_PROFILE: 'sso/userprofile'
}

let API_BOOK = {
    login_api: {
        url: endpoints.LOGIN,
        method: 'POST',
        data: null
    }
}

export default API_BOOK