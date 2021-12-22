import { useHistory } from "react-router";
import { useEffect, useLayoutEffect } from "react";
import { goToLogin } from "../routers/cordinator";

const useProtectedPage = () => {
    
    const history = useHistory()
    useEffect (() => {
        const token = localStorage.getItem('token')
        if (!token) {
            goToLogin(history)
        }
    }, [history])
}

export default useProtectedPage