export const goToLogin = (history) => {
    history.push ("/login")
}

export const goToSingUp = (history) => {
    history.push ("/cadastro")
}

export const goToFeed = (history) => {
    history.push("/")
}

export const goToPost = (history, id) => {
    history.push (`/post/${id}`)
}