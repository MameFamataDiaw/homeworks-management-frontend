import type { LoginResponseType } from "@/views/auth/actions/LoginUser";

export function getUserData() : LoginResponseType | undefined{
    const userData = localStorage.getItem('userData');

    if (typeof userData === 'object') {
        window.location.href="/"
    }

    try {
        if (typeof userData !== 'object') {
            const connectedUser : LoginResponseType = JSON.parse(userData)
            return connectedUser
        }
    } catch (error) {
        console.log(error)
    }
}