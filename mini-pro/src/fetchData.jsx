
export const fetchData = async() => {
    const res = await fetch('https://dummyjson.com/products')  
    if(!res.ok){
        throw new Response("Product not found",{status:404})
    }  
    return res.json()
}

