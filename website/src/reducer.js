export const initialState = {
  
    cart: [],
   user:null
};


const reducer = (state,action) => {
    console.log(action.item)
    switch(action.type){
        
            case 'ADD':
                return {
                    ...state,
                    cart:[...state.cart,action.item]
                }
            case 'REMOVE':
               const index = state.cart.findIndex(
                   (item)=>item.id === action.id
               )
            console.log(action.id)
               let newCart=[...state.cart]
               if(index >=0){
                   newCart.splice(index,1)
               } else {
                   console.warn(
                       'item not in the list'
                   )
               }
               return{
                   ...state,
                   cart: newCart
               }
               case "SET_USER":
               return {
                   ...state,
                   user:action.user
               }
      
        default:
            return state;
    }
}

export default reducer