const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })

    if(response.ok) {
        return document.location.replace('/')
    } else {
        return console.error("Failed to logout.")
    }
}

document.querySelector('#user-logout').addEventListener('click', logout)