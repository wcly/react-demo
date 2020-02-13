let isLogin = false

const login = () => {
    isLogin = true
}

const logout = () => {
    isLogin = false
}

export {
    isLogin,
    login,
    logout
}