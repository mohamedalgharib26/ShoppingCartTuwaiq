import { createSlice } from "@reduxjs/toolkit";


const initialValue = localStorage.getItem("cart")
? JSON.parse(localStorage.getItem("cart"))
: [];

const initialState = {
    cartItems: initialValue
};

const addItemsToCart = (cartArr = [],cartItem ={}) => {

    const isExists = cartArr.some((cartArrItem)=> cartArrItem.id === cartItem.id);
    if(isExists){
        return cartArr.map((item)=> item.id === cartItem.id ? {...item , quantity : item.quantity + 1 } : item);
    }
    return [...cartArr , {
        ...cartItem,
        quantity : 1
    }]
}

export const CartSlice = createSlice({
    initialState,
    name :"cartItems",
    reducers:{
        addToCartAction: (state,action) => {
            return{
                 cartItems: addItemsToCart(state.cartItems , action.payload)
            }
        },
       clearCartAction : (state , action ) =>{
            return {
                cartItems:[]
            }
       }
    }
})

export const {addToCartAction ,clearCartAction } = CartSlice.actions;
export default CartSlice.reducer;