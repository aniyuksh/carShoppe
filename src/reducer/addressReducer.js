const initial = [
  {
    id: 1,
    name: "Aniyuksh",
    phone: "9999999999",
    city: "Ahmedabad",
    state: "Gujarat",
    pin: "222222",
    addressLine: "1, abc society, nr kaali pahadi, chambal",
  },
];

const addressReducer = (state, action) => {
  switch (action.type) {
    case "add-addr": {
      return [...state, action.payload];
    }
    case "remove-addr": {
      return [...state.filter((ele) => ele.id !== action.payload)];
    }
    case "edit-addr": {
      const editedAddr = state.map((ele) =>
        ele.id === action.payload.id ? { ...action.payload } : ele
      );
      return editedAddr;
    }
  }
};

export { addressReducer, initial };
