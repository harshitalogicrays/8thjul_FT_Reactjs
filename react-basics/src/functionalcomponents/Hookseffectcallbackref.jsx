import React, { useCallback, useEffect, useState } from 'react'

const Hookseffectcallbackref = () => {
    let [data,setData]=useState()
    let [length,setLength]=useState(8)
    let [numAllowed,setNumAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    // let generateRandomData=()=>{
    //     let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZXY'
    //     if(numAllowed){str += '0987654321'}
    //     if(charAllowed){str += '!@#$%^&*-+=-_.'}
    //     let cap=''
    //     for(let i=1;i<=length;i++){
    //         cap+=str.charAt(Math.floor(Math.random()*str.length))
    //     }
    //     setData(cap)
    // }

let generateRandomData = useCallback(()=>{
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZXY'
    if(numAllowed){str += '0987654321'}
    if(charAllowed){str += '!@#$%^&*-+=-_.'}
    let cap=''
    for(let i=1;i<=length;i++){
        cap+=str.charAt(Math.floor(Math.random()*str.length))
    }
    setData(cap)
},[length,numAllowed,charAllowed])


    // useEffect(()=>{ generateRandomData() },[]) //call only at the time of component loading in the browser 

    useEffect(()=>{ generateRandomData() },[length,numAllowed,charAllowed]) 

    let copyRef = React.useRef()
    let handleCopy=()=>{
        // document.getElementById('txt').select()
        // document.getElementById('txt').style.color = 'red'

        copyRef.current.select()
        copyRef.current.setSelectionRange(0,5)
        copyRef.current.style.color = 'red'
        copyRef.current.style.backgroundColor = 'yellow'
        window.navigator.clipboard.writeText(data)
    }
  return (
    <div className='container mt-5 shadow p-3 col-6'>
        <div class="mb-3 input-group">
            <input type="text" ref={copyRef} class="form-control"  value={data}/>
            <button  type="button"  class="btn btn-primary" onClick={handleCopy}>Copy</button>
        </div>
        <input type="range" value={length} min={4} max={100} onChange={(e)=>setLength(e.target.value)}/> Length ({length})&emsp;&emsp;
        <input type="checkbox" onClick={()=>setNumAllowed(!numAllowed)}/> Numbers&emsp;&emsp;
        <input type="checkbox" onClick={()=>setCharAllowed(!charAllowed)}/> Characters
    </div>
  )
}

export default Hookseffectcallbackref
