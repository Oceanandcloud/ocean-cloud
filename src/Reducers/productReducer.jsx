const productReducer = (state, action) => {
    switch (action.type) {
      
  
      case "SET_API_DATA":
        return {
          ...state,
          products: action.payload,
        };
  
      case "SET_SINGLE_PRODUCT":
        return {
          ...state,
          sigleProduct: action.payload,
        };
  
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  