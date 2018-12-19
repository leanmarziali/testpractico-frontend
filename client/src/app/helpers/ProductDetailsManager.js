import { getProductDetailsFromAPI } from '../services/ProductDetails';

const ProductDetailsManager = {
    getProductDetails:  (criteria) => {
        return getProductDetailsFromAPI(criteria);
    }
};

export default ProductDetailsManager;