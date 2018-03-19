const
  request = (url, options) =>{
    return new Promise((resolve, reject) => {
      if (!url) reject(new Error('URL parameter required'));
      if (!options) reject(new Error('Options parameter required'));
      fetch(url, options)
        .then(response => {
          return response.text().then(function(text) {
            return text ? JSON.parse(text) : {}
          })
        })
        .then(response => {
          if (response.errors) reject(response.errors);
          else resolve(response);
        })
        .catch(reject);
    });
  },
  defaultOptions = {
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  },
  network = {
    /**
     * @function get
     * @description Make a HTTP GET request.
     * @param {object} path
     * @returns {promise}
     */
    get: (path) => {
      return request(path, Object.assign(
        defaultOptions,
        { method: 'GET'}
      ));
    },

    /**
     * @function post
     * @description Make a HTTP POST request.
     * @param {string} path
     * @param {object} body
     * @param {object} options
     * @returns {promise}
     */
    post: (path, body, options = { method: 'POST'}) => {
      return request(path, Object.assign(
        defaultOptions,
        options,
        {
          body: JSON.stringify(body)
        }
      ));
    },
  };

export default network;