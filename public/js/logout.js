const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })

    if(response.ok) {
        return document.location.replace('/')
    }
}

document.querySelector('#user-logout').addEventListener('click', logout)