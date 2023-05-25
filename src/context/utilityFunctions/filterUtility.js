function sortByPriceFunction (product, type){
    if(type === "lowToHigh"){
        return [...product].sort((a,b)=> a.price - b.price)
    }
    if(type === "highToLow"){
        return [...product].sort((a,b)=> b.price - a.price )
    }
    return product;
}

function applyFilter(
    product,
    filterSearch,
    filterCategory,
    filterFuel,
    filterBrand,
    filterRating,
    filterPriceRange,

) {
    
    if(filterSearch.length !== 0){
        
       product =  product?.filter((car)=>car.model.toLowerCase() === filterSearch.trim().toLowerCase() || car.brand.toLowerCase() === filterSearch.trim().toLowerCase())
    
    }

    if(filterCategory.length!==0){
        product = product?.filter((element)=> filterCategory.find((a)=> a === element.categoryName))
       
    }

    if(filterFuel.length!==0){
        product = product?.filter((car)=>
        filterFuel.find((a)=>a === car.fueltype))
       
    }

    if(filterBrand.length!==0){
        product = product?.filter((car)=>
        filterBrand?.find((a)=>a === car.brand))
       
    }

    if(filterRating){
        product = product?.filter((car)=>
        Number(car.ncap) >= Number(filterRating)
        )
       
    }

    product = product && product?.filter((car)=>car.price <= Number(filterPriceRange))
    
    return product;
}


export {sortByPriceFunction , applyFilter};