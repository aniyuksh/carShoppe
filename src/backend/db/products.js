import { v4 as uuid } from "uuid";

// import dzire from "../../assets/card-images/dzire.jpg"
import dzire from "../../assets/card-images/dzire.jpg";
import dzire1 from "../../assets/card-images/dzire1.jpg"
import wagon from "../../assets/card-images/wagon.jpeg";
import nexon from "../../assets/card-images/nexon.jpg";

// const c1 = 

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "p1",
    brand: "Suzuki",
    model: "Wagon R",
    price: "50000",
    categoryName: "hatchback",
    fueltype : "Petrol",
    releaseYear : 2000,
    mileage : 20,
    preowned : false,
    ncap : 1.7,
    url : wagon,
  },
  {
    _id: "p2",
    brand: "Suzuki",
    model: "Swift Dzire",
    price: "700000",
    categoryName: "sedan",
    fueltype : "Diesel",
    releaseYear : 2001,
    mileage : 22,
    preowned : false,
    ncap : 3.0,
    url : dzire1,
  },
  {
    _id: "p3",
    brand: "Tata",
    model: "Nexon",
    price: "900000",
    categoryName: "suv",
    fueltype : "Diesel",
    releaseYear : 2015,
    mileage : 20,
    preowned : false,
    ncap : 4.0,
    url : nexon,
    
  },
  {
    _id: "p4",
    brand: "Suzuki",
    model: "Swift",
    price: "90000",
    categoryName: "hatchback",
    fueltype : "Cng",
    releaseYear : 1998,
    mileage : 25,
    preowned : true,
    ncap : 3.5,
    url : wagon,
  },
  {
    _id: "p5",
    brand: "Tata",
    model: "Tigor",
    price: "800000",
    categoryName: "sedan",
    fueltype : "Cng",
    releaseYear : 2012,
    mileage : 25,
    preowned : false,
    ncap : 2.5,
    url : dzire,
  },
  {
    _id: "p6",
    brand: "Hyundai",
    model: "Creta",
    price: "100000",
    categoryName: "suv",
    fueltype : "Diesel",
    releaseYear : 2012,
    mileage : 12,
    preowned : false,
    ncap : 3.2,
    url : nexon,
  },
  {
    _id: "p7",
    brand: "Suzuki",
    model: "Baleno",
    price: "700000",
    categoryName: "hatchback",
    fueltype : "Diesel",
    releaseYear : 2012,
    mileage : 17,
    preowned : false,
    ncap : 2.8,
    url : wagon,
  },
  {
    _id: "p8",
    brand: "Hyundai",
    model: "Aura",
    price: "70000",
    categoryName: "sedan",
    fueltype : "Diesel",
    releaseYear : 2001,
    mileage : 22,
    preowned : false,
    ncap : 1.9,
    url : dzire,
  },
  {
    _id: "p9",
    brand: "Tata",
    model: "Punch",
    price: "500000",
    categoryName: "suv",
    fueltype : "Diesel",
    releaseYear : 2019,
    mileage : 25,
    preowned : false,
    ncap : 3.8,
    url : nexon
  },
  {
    _id: "p10",
    brand: "Suzuki",
    model: "Alto 800",
    price: "20000",
    categoryName: "hatchback",
    fueltype : "Petrol",
    releaseYear : 1980,
    mileage : 12,
    preowned : true,
    ncap : 4.8,
    url : wagon
  },
  {
    _id: "p11",
    brand: "Honda",
    model: "Amaze",
    price: "1000000",
    categoryName: "sedan",
    fueltype : "Diesel",
    releaseYear : 2003,
    mileage : 16,
    preowned : false,
    ncap : 2.6,
    url : dzire
  },
  {
    _id: "p12",
    brand: "Hyundai",
    model: "Venue",
    price: "100000",
    categoryName: "suv",
    fueltype : "Diesel",
    releaseYear : 2011,
    mileage : 7,
    preowned : true,
    ncap : 3.6,
    url : nexon
  },
  {
    _id: "p13",
    brand: "Hyundai",
    model: "i20",
    price: "500000",
    categoryName: "hatchback",
    fueltype : "Cng",
    releaseYear : 2000,
    mileage : 27,
    preowned : true,
    ncap : 3.0,
    url : wagon
  },
  {
    _id: "p14",
    brand: "Skoda",
    model: "Slavia",
    price: "1500000",
    categoryName: "sedan",
    fueltype : "Diesel",
    releaseYear : 2013,
    mileage : 16,
    preowned : false,
    ncap : 4.5,
    url : dzire
  },
  {
    _id: "p15",
    brand: "Tata",
    model: "Harrier",
    price: "2200000",
    categoryName: "suv",
    fueltype : "Diesel",
    releaseYear : 2021,
    mileage : 20,
    preowned : false,
    ncap : 4.9,
    url : nexon
  },
  
];
