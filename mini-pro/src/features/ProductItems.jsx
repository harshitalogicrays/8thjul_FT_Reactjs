import React from 'react'
import { useContext } from 'react'
import { myContext, useMycontext } from '../CartContext'
const ProductItems = ({products}) => {
  const mydata =useMycontext()
  // console.log(mydata)

  let handleCart=(product)=>{
    mydata.addtocart(product)
  }
  return (
  <>
   <div className="bg-white" >
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative" >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-65 lg:h-80" >
                <img
                  alt={product.images[0]}
                  src={product.images[0]}   
                  className="h-40 w-full object-cover object-center lg:h-80 lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0"  />
                      {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500" >{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <button type="button"  className= "bg-slate-600 text-center text-yellow-200 px-3 py-2 text-xl rounded-lg my-2 relative" onClick={()=>handleCart(product)} >Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>  
  )
}

export default ProductItems
