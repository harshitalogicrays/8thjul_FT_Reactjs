import { Navigate } from "react-router-dom"

export let ShowOnLogin=({children})=>{
    if(sessionStorage.getItem("8thjulreact") != null){
        return children
    }
    else return null
}

export let ShowOnLogout=({children})=>{
    if(sessionStorage.getItem("8thjulreact") == null){
        return children
    }
    else return null
}

export let Protected=({children})=>{
    if(sessionStorage.getItem("8thjulreact") != null){
        let obj = JSON.parse(sessionStorage.getItem("8thjulreact"))
        if(obj.isLoggedIn && obj.role=="1") return children
        else{
            return <Navigate to='/login' replace={true}></Navigate>
        } 
    }
    else {
        return <Navigate to='/login' replace={true}></Navigate>}
}