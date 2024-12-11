import { v4 as uuidv4 } from "uuid";

const productReducer = (state, action) => {
    switch (action.action) {
        case "product/onInput":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        default:
            return state;
    }
};

const productsReducer = (state, action) => {
    switch (action.action) {
        case "products/onSave":
            return [...state, { ...action.payload, id: uuidv4() }];
    }
};

const reducer = (state, action) => {
    // console.log(state, action);
    return {
        product: productReducer(state.product, action),
        products: productsReducer(state.products, action),
    };
};

export default reducer;
