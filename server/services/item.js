var apiUtils = require('../utils/api');

var parseItem = function(itemData, itemDescData) {
    var salida = {
        author: {
            name: 'Leandro',
            lastname: 'Marziali'
        },
        item: {
            id: itemData.id,
            title: itemData.title,
            // Simplified property 
            price: {
                currency: '$', // default value
                amount: itemData.price,
                decimals: 2 // default value
            },
            picture: itemData.pictures[0].secure_url,
            condition: itemData.condition,
            free_shipping: itemData.shipping.free_shipping,
            sold_quantity: itemData.sold_quantity,
            description: itemDescData.plain_text
        }
    };
    return salida;
}

var item = function(id) {
    var options = {
        method : 'GET',
        path: 'items/' + id
    };
 
    return apiUtils.doApiCall(options)
     .then( function(itemRes) {

        options.path += '/description';

        return apiUtils.doApiCall(options)
         .then( function(itemDescRes) {
             
             return parseItem(
                 JSON.parse(itemRes),
                 JSON.parse(itemDescRes)
             );
         })
         .catch(function(itemDescError) {
            return {
                status: "ERR",
                message: itemDescError
            }; 
         })
     })
     .catch(function(itemError){
        return {
            status: "ERR",
            message: itemError
        }; 
     });
};

module.exports = item;