// removeWish addWish

import axios from "axios";
// import { useWish } from "../wishlistContext";
let token = localStorage?.getItem("token");

// const {setWish} = useWish();
async function addWish(product, setWish) {
  console.log("called from single");
  try {
    let token = localStorage?.getItem("token");
    const { data } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setWish(data.wishlist);
    console.log("added wish", data.wishlist);
  } catch (err) {
    console.log("add to wish error", err);
  }
}

async function removeWish(id, setWish) {
  console.log("called from single");
  try {
    let token = localStorage?.getItem("token");
    const { data } = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    setWish(data.wishlist);
    console.log("removed wish", data.wishlist);
  } catch (err) {
    console.log("wishlist remove error", err);
  }
}

export { removeWish, addWish };
