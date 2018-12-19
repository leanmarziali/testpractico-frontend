var request = require('request-promise'); // simplified http client

Request = function (options) {
    this.uri = 'https://api.mercadolibre.com/' + options.path,
    this.method = options.method,
    this.json = options.json
};

Request.prototype.call = function () {
    return request(this);
};

var doApiCall = function (options) {
    // Create Request
    var apiRequest = new Request(options);
    // Send Request
    return apiRequest.call();
};

module.exports = { doApiCall };