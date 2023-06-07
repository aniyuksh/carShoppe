import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    url: "https://unsplash.com/photos/bvxHI7rTKbo",
    categoryName: "suv",
    description:
      "Quite popular in the Indian market, SUV is a car body-type that comprises vehicles that are both passenger vehicles as well as off-roaders. SUVs are generally large and measure well over the 4 meter mark, with compact SUVs being the exception, coming under 4 meters. Built with a tall bodyline, SUVs provide the driver with a commanding view of the road ahead. Moreover, SUVs have high ground clearance providing better terrain handling capability as well as a stance higher from the ground. This is a feature that makes them distinct from all other vehicle body-types.",
  },
  {
    _id: uuid(),
    categoryName: "sedan",
    url: "https://unsplash.com/photos/Gi0gRd8gTik",
    description:
      "Derived from the Latin term “sedere” which means “to sit”, sedans are designed to provide utmost comfort and convenience for passengers both at the front as well as the rear. The major component of a sedan is its longer body that’s built with a three-box configuration consisting of pillars identified as A, B, and C pillars. Compared to hatchbacks, sedans have a separate boot compartment, which exists as an addition to the vehicle’s bodyline. Thus, when you open up a sedan’s boot, you’re opening just the boot and not the car itself. With the boot being a separate compartment, a sedan usually has a larger boot space than a hatchback.",
  },
  {
    _id: uuid(),
    categoryName: "hatchback",
    url: "https://unsplash.com/photos/ZhEnFcHO0es",
    description:
      " A hatchback can be defined as a vehicle body type that comprises four doors along with an additional rear hatch that opens upward to access the boot space. Hatchbacks are generally designed with compact bodies and are perfect for comfortably seating up to five passengers. Nonetheless, the most striking feature of this segment is the boot: a space behind the rear seats that exists inside the car itself, rather than as a separate space. Thus, when you open the hinged boot of a hatchback, you are practically opening the car itself. ",
  },
];
