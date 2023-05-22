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
       console.log(1)
    }

    if(filterCategory.length!==0){
        product = product?.filter((element)=> filterCategory.find((a)=> a === element.categoryName))
        console.log(2)
    }

    if(filterFuel.length!==0){
        product = product?.filter((car)=>
        filterFuel.find((a)=>a === car.fueltype))
        console.log(3)
    }

    if(filterBrand.length!==0){
        product = product?.filter((car)=>
        filterBrand?.find((a)=>a === car.brand))
        console.log(4)
    }

    if(filterRating){
        product = product?.filter((car)=>
        Number(car.ncap) >= Number(filterRating)
        )
        console.log(5)
    }

    if(filterPriceRange){
        product = product?.filter((car)=>
        car.price <= Number(filterPriceRange))
        console.log(6)
    }
    console.log("ABHISHEK", product)
    return product;
}


export {sortByPriceFunction , applyFilter};