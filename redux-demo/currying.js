//currying function 

let fun=(a)=>(b)=>(c)=>{
        console.log(a,b,c)
}

fun(3)(5)(8)