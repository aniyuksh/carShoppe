function CartReducer (state , action ){
    switch(action.type) {
        case "addCart" : 
            let isPresent = state.findIndex((item)=>item._id === action.payload._id)
            if(isPresent === -1 ) return [...state , { ...action.payload , quantity : 1}];
            return state.map((item)=>
                item._id === action.payload._id ? {...item , quantity : item.quantity + 1 } : item
            );
            
        case "increase" : 
            return state.map((item)=>
                item._id === action.payload._id ? {...item , quantity : item.quantity + 1}  : item
            )
        
        case "decrease" : 
            return state.map((item)=>
                item._id === action.payload._id ? {...item , quantity : item.quantity - 1}  : item
            )

        case "remove" : 
            return state.filter((item)=>item._id !== action.payload._id)
        
        default : 
            return state;
    }
}


export {CartReducer};