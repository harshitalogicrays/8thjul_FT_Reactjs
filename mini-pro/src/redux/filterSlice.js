import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filter",
    initialState:{filterproducts:[],searchvalue:'',pricevalue:'',catval:''},
    reducers:{
        FILTER_BY_SEARCH(state,action){
         let {products,search}=action.payload
         if(search !=''){
          let filter = products.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()))
            state.filterproducts=filter
          }
         state.searchvalue=search
        },
        FILTER_BY_PRICE(state,action){
            // console.log(action.payload)
            let {products,price}=action.payload
            if(price !=''){
                const filter = [...products].sort((a,b)=>{
                    return price == 'ltoh'?a.price - b.price :b.price-a.price
                })
                state.filterproducts=filter
            }
            state.pricevalue=price
        },
        FILTER_BY_CATEGROY(state,action){
            let {products,category}=action.payload
            if(category !=''){
             let filter = products.filter(item=> item.category==category)
               state.filterproducts=filter
             }
            state.catval=category
        }
    }
})
export const {FILTER_BY_SEARCH,FILTER_BY_PRICE,FILTER_BY_CATEGROY}=filterSlice.actions
export default filterSlice.reducer

export const selectFilter = (state)=>state.filter.filterproducts
export const selectSearch = (state)=>state.filter.searchvalue
export const selectPrice = (state)=>state.filter.pricevalue
export const selectCategory = (state)=>state.filter.catval