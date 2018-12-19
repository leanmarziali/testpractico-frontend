import fetch from 'cross-fetch';

const base_URL = 'http://localhost:8000/api/items'

const ApiUtils = {

  sendRequest : (options)  => {

    const URL = base_URL + options.URL;
    let config = { method: options.method };
    
    if (options.body) // It is a POST, PUT, ...
      config.body = options.body;
    if (options.headers)
      config.headers = options.headers;

    return fetch(URL, config)
            .then( res => res.json())
            .then( (response) => {
                return {
                  status: "OK",
                  data: response
                }
            })
            .catch( (err) => {
                return {
                    status: "ERR",
                    message: err
                }
            });
  }
};

export default ApiUtils;