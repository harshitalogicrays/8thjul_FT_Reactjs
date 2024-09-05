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