import { getProductsFromAPI } from '../services/Products';

const ProductsManager = {
    getProducts:  (criteria) => {
        return getProductsFromAPI(criteria);
    }
};

export default ProductsManager;