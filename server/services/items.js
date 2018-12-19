var apiUtils = require('../utils/api');

var parseCategories = function(data) {
    var salida = [], i;
    for (i=0; i < data.length; i++)
        salida.push({
            id: data[i].id,
            name: data[i].name
        });
    return salida;
}

var parseItems = function(data) {
    var salida = {
        author: {
            name: 'Leandro',
            lastname: 'Marziali'
        },
        categories: [],
        items: []
    };
    // Parse categories
    salida.categories = parseCategories(data.filters[0].values[0].path_from_root);
    // Parse items
    var i;
    for (i = 0; i < 4; i++)
        salida.items.push({
            id: data.results[i].id,
            title: data.results[i].title,
            price: {
                currency: '$', // default value
                amount: data.results[i].price,
                decimals: 2 // default value
            },
            address: data.results[i].address.state_name,
            picture: data.results[i].thumbnail,
            condition: data.results[i].condition,
            free_shipping: data.results[i].free_shipping
        });
    
    return salida;
};

var items = function(query) {
    var options = {
        method : 'GET',
        path: 'sites/MLA/search?q=' + query
    };
    return apiUtils.doApiCall(options)
     .then(function(response) {
        return parseItems(JSON.parse(response));
     })
     .catch(function(error){
        return {
            status: "ERR",
            message: error
        };     
     });
};

module.exports = items;