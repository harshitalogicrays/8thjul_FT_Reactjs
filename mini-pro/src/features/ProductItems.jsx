import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { myContext, useMycontext } from '../CartContext'
import ReactPaginate from 'react-paginate'
const ProductItems = ({products}) => {
  const mydata =useMycontext()
  // console.log(mydata)

  let handleCart=(product)=>{
    mydata.addtocart(product)
  }

  //pagination 
  let itemsPerPage =4
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems,setCurrentItems ] = useState([])
  const [pageCount,setPageCount]=useState(0)

  useEffect(()=>{
     const endOffset = itemOffset + itemsPerPage;//4
  setCurrentItems(products.slice(itemOffset, endOffset))//0 to 3
  setPageCount( Math.ceil(products.length / itemsPerPage)) 
  },[itemOffset,products])

  const handlePageClick = (event) => {//2(index 1)
    const newOffset = (event.selected * itemsPerPage) % products.length;//4
    setItemOffset(newOffset); //5
  };
  return (
  <>
  {products.length==0 && <h1>No Product Found</h1>}
   <div className="bg-white" >
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentItems.map((product) => (
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
                  <p className="text-sm font-medium text-gray-900">Available: {product.stock}</p> 
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
               
              </div>
              <button type="button"  className= "bg-slate-600 text-center text-yellow-200 px-3 py-2 text-xl rounded-lg my-2 relative" onClick={()=>handleCart(product)} >Add to cart</button>
            </div>
          ))}
        </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-end justify-items-end border-t border-gray-200 bg-white px-2 py-3 sm:px-6 "
        previousClassName="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        nextClassName="relative  inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        pageClassName="relative inline-flex items-center px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        activeLinkClassName="relative z-10 inline-flex items-center bg-indigo-600 px-2 py-1 text-sm font-semibold text-white "
           
      />
    </div>
  </>  
  )
}

export default ProductItems
