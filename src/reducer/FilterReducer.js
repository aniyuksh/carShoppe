
const initialState = {
    filterSearch : "",
    filterCategory : [],
    filterFuel : [],
    filterBrand : [],
    filterRating : null,
    filterPriceRange : 2200000,
    filterByPrice : "",
    
}
const filterReducer = (state, action) => {
    // console.log(state)
    switch (action.type) {

        case "filterSearch" : 
            return {
                ...state , 
                filterSearch : action.payload,
            }
        

        case "filterCategory" : 
            // console.log("came")
            return {
                ...state , 
                filterCategory : [...state.filterCategory , action.payload],
            }
        

        case "filterFuel" : 
            return {
                ...state , 
                filterFuel : [...state.filterFuel , action.payload],
            }
        

        case "filterBrand" : 
            return {
                ...state , 
                filterBrand : [...state.filterBrand , action.payload],
            }
        
        case "filterRating" : 
        console.log(typeof action.payload);
            return {
                ...state , 
                filterRating : action.payload,
            }
        

        case "filterPrice" : 
            return {
                ...state , 
                filterPriceRange : action.payload,
            }
        

        case "clearFilter" : 
            return {
                filterSearch : "",
                filterCategory : [],
                filterFuel : [],
                filterBrand : [],
                filterRating : "",
                filterPriceRange : "2200000"
            }
        

        case "removeCategory" : 
            return {
                ...state , 
                filterCategory : state.filterCategory.filter((category)=> category !== action.payload)
            }
        

        case "removeFuel" : 
            return {
                ...state , 
                filterFuel : state.filterFuel.filter((fuel)=> fuel !== action.payload)
            }
        

        case "removeBrand" : 
            return {
                ...state , 
                filterBrand : state.filterBrand.filter((brand)=> brand !== action.payload)
            }
        case "lowToHigh" : 
            return {
                ...state , 
                filterByPrice : action.payload
            }
        
        case "highToLow" : 
            return {
                ...state , 
                filterByPrice : action.payload
            }
        
        default :
            return state; 
        
    }

}

export { filterReducer, initialState}