
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};


export const addToCart = (product) => {
  return { type: 'ADD_TO_CART', payload: product };
};

export const removeFromCart = (productId) => {
  return { type: 'REMOVE_FROM_CART', payload: productId };
};


const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;



const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      if (!state.cart.find((item) => item.id === newItem.id)) {
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }
      return state;

    case 'REMOVE_FROM_CART':
      const productId = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== productId),
      };

    default:
      return state;
  }
};

export default cartReducer;


