import React, { useState } from "react";
import { useAddr } from "../context/addressContext";
const initialState = {
  name: "",
  phone: "",
  city: "",
  state: "",
  pin: "",
  addressLine: "",
};

const AddressForm = ({ item, setEditItem, setShowForm }) => {
  const { state, dispatch } = useAddr();

  const [newAddr, setNewAddr] = useState(item || initialState);

  function userInputHandler(e, keyName) {
    setNewAddr((prev) => ({
      ...prev,
      [keyName]: e.target.value,
    }));
  }
  console.log(setEditItem);
  function onFormSubmit() {
    const { name, phone, city, pin, addressLine } = newAddr;
    if (name && phone && city && pin && addressLine == "") {
      alert("Fill proper detailss");
      return;
    }
    if (item) {
      dispatch({
        type: "edit-addr",
        payload: newAddr,
      });
      setEditItem(null);
      setShowForm((prev) => !prev);
    } else {
      dispatch({
        type: "add-addr",
        payload: { ...newAddr, id: state.length + 1 },
      });
      setNewAddr(initialState);
      setShowForm((prev) => !prev);
    }
  }

  return (
    <div>
      <form className="flex flex-col gap-2 border border-gray-400-100 p-5 m-5">
        <div className="border border-gray-500 p-1 rounded-md">
          <input
            type="text"
            placeholder="Name"
            value={newAddr.name}
            // defaultValue={}
            id="name"
            required
            onChange={(e) => userInputHandler(e, "name")}
          />
        </div>
        <div className="border border-gray-500 p-1 rounded-md">
          <input
            type="text"
            placeholder="Phone"
            value={newAddr.phone}
            onChange={(e) => userInputHandler(e, "phone")}
            required
          />
        </div>
        <div className="border border-gray-500 p-1 rounded-md">
          <input
            type="text"
            placeholder="City"
            value={newAddr.city}
            onChange={(e) => userInputHandler(e, "city")}
            required
          />
        </div>
        <div className="border border-gray-500 p-1 rounded-md">
          <input
            type="text"
            placeholder="State"
            value={newAddr.state}
            onChange={(e) => userInputHandler(e, "state")}
            required
          />
        </div>
        <div className="border border-gray-500 p-1 rounded-md">
          <input
            type="text"
            placeholder="PinCode"
            value={newAddr.pin}
            onChange={(e) => userInputHandler(e, "pin")}
            required
          />
        </div>
        <div className="border border-gray-500 p-1 rounded-md">
          <input
            type="text"
            placeholder="Address"
            value={newAddr.addressLine}
            onChange={(e) => userInputHandler(e, "addressLine")}
            required
          />
        </div>
        <button
          onClick={onFormSubmit}
          className="border border-gray-700 rounded-xl bg-slate-200"
        >
          {item ? "Edit" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
