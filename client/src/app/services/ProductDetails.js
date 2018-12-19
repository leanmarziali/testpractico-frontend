import ApiUtils from '../utils/Api';

export const getProductDetailsFromAPI  = (argument) => {
    const options = {
        method: 'GET',
        URL: '/' + argument
    }
    return ApiUtils.sendRequest(options)
        .then( (results) => {
            if (results.status === "OK")
              return results.data;
            else
              return results.message;
        });
};