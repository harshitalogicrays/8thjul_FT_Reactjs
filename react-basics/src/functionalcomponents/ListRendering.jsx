import React from 'react'
import { productlist } from '../assets/productlist.js'
const ListRendering = () => {
    const names=['aaaa','bbbb','cccc','dddd','eeee','fffff']
    let result = names.map((name,i)=><h1 key={i}>{name}</h1>)
    console.log(productlist)
  return (
    <>
        {/* {names.map((name,i)=><h1 key={i}>{name}</h1>)} */}

        {/* {result} */}
        {/* {productlist.map((product,i)=><h1 key={i}>{JSON.stringify(product)}</h1>)}  */}

        <div class="table-responsive"    >
            <table  class="table table-bordered table-striped"  >
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">NAme</th>
                        <th scope="col">Image</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {productlist.length ==0 && <tr><td colSpan={7}>No Product found</td></tr>}
                    {/* {productlist.map((product,i)=>
                    <tr key={product.id}>
                        <td scope="row">{i+1}</td>
                        <td>{product.name}</td>
                        <td><img src={product.image} width='50px' height={50}/></td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>${product.price}</td>
                        <td>{product.stock}</td>
                    </tr>
                    )} */}

        {/* {productlist.map((product,i)=>{
                    return <tr key={product.id}>
                        <td scope="row">{i+1}</td>
                        <td>{product.name}</td>
                        <td><img src={product.image} width='50px' height={50}/></td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>${product.price}</td>
                        <td>{product.stock}</td>
                    </tr>}
                    )}   */}

{productlist.map((product,i)=>{
    let {id,name,category,image,price,stock,brand}=product
                    return <tr key={id}>
                        <td scope="row">{i+1}</td>
                        <td>{name}</td>
                        <td><img src={image} width='50px' height={50}/></td>
                        <td>{category}</td>
                        <td>{brand}</td>
                        <td>${price}</td>
                        <td>{stock}</td>
                    </tr>}
                    )}  
                </tbody>
            </table>
        </div>
        
    </>  
    )
}

export default ListRendering
