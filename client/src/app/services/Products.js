import ApiUtils from '../utils/Api';

export const getProductsFromAPI  = (argument) => {
    const options = {
        method: 'GET',
        URL: '?q=' + argument
    }
    return ApiUtils.sendRequest(options)
        .then( (results) => {
            if (results.status === "OK")
              return results.data;
            else
              return results.message;
        });
};