
const initialState = {
   categoryData : [],
   productData : []
}

const productReducer = (state , action ) => {
  switch (action.type) {
    case "setProductData" : 
    return {
      ...state , 
      productData : [...state.productData , action.payload],
  }
  case "setCategoryData" : 
    return {
      ...state , 
      categoryData : [...state.categoryData , action.payload],
  }

  }
}

export { productReducer, initialState}