import React, { useEffect, useState } from 'react'
// import {productlist} from '/src/assets/productlist.js'
import ProductItems from './ProductItems'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_BY_CATEGROY, FILTER_BY_PRICE, selectCategory, selectFilter, selectPrice, selectSearch } from '../redux/filterSlice'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'


const Products = () => {
    // const [products,setProducts]=useState([...productlist])
    useEffect(()=>{
      getAllProducts()
    },[])

    let getAllProducts=async()=>{
      try{
         let res =  await fetch('https://dummyjson.com/products')
         let data =  await res.json()
         setProducts(data.products)
      }
      catch(err){toast.error(err.message)}
    }
    const [products,setProducts]=useState([])

    const filterProducts =useSelector(selectFilter)
    const searchvalue = useSelector(selectSearch)
    const pricevalue = useSelector(selectPrice)
    const catvalue = useSelector(selectCategory)
    console.log(pricevalue,filterProducts)

    const dispatch=useDispatch()

    const sortOptions = [
      { name: 'Price: Low to High', value:'ltoh'},
      { name: 'Price: High to Low', value:"htol"},
    ]

    const categories = Array.from(new Set(products.map((product)=>product.category)))
    const brands = Array.from(new Set(products.map((product)=>product.brand)))
 
 
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (
   <>
   <div>
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3  className="text-2xl mb-4 font-bold">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {categories.map((category,i) => (
                    <li key={i} className='cursor-pointer' >
                      <p className="block px-2 py-3">
                        {category}
                      </p>
                    </li>
                  ))}
                </ul>

                <h3  className="text-2xl mb-4 font-bold">Brands</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {brands.map((brand,i) => (
                    <li key={i} className='cursor-pointer'>
                      <p >{brand}</p>
                    </li>
                  ))}
                </ul>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-2 sm:px-2">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Products</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <span
                          value={option.value} onClick={()=>dispatch(FILTER_BY_PRICE({products,price:option.value}))}
                          className="text-gray-500 block px-4 py-2 text-sm data-[focus]:bg-gray-100 cursor-pointer"
                        >
                          {option.name}
                        </span>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3  className="text-2xl mb-4 font-bold">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {categories.map((category,i) => (
                    <li key={i} className='cursor-pointer' onClick={()=>dispatch(FILTER_BY_CATEGROY({products,category}))}>
                      <p >{category}</p>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl mb-4 font-bold">Brands</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {brands.map((brand,i) => (
                    <li key={i} className='cursor-pointer'>
                      <p >{brand}</p>
                    </li>
                  ))}
                </ul>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
              {(searchvalue=='' && pricevalue=='' && catvalue=='') ? <ProductItems products={products}></ProductItems> :
                <>
                    {filterProducts.length==0 ? <h1 className='text-center text-4xl font-bold mt-6'>No product found</h1> :
                      <ProductItems products={filterProducts}></ProductItems>
                    }
                </>
              }
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>


  
   </>
  )
}

export default Products
