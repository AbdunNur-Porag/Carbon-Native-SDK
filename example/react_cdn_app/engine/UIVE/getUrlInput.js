const utils = (function () {
  // Get value of a URL param as string
  function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  // Get value of param as array from comma-separated string
  function getParamArray(name) {
    const raw = getParam(name);
    if (!raw) return [];
    return raw.split(',').map(item => decodeURIComponent(item.trim()));
  }

  // Get all query params as an object (single strings)
  function getAllParams() {
    const params = new URLSearchParams(window.location.search);
    const obj = {};
    for (const [key, value] of params.entries()) {
      obj[key] = value;
    }
    return obj;
  }

  // Convert object to query string
  function toQueryString(obj) {
    return Object.keys(obj)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
      .join('&');
  }

  // Update query string in URL without reload
  function updateQuery(params, replace = false) {
    const current = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([key, value]) => {
      current.set(key, value);
    });

    const newURL = `${window.location.pathname}?${current.toString()}`;
    if (replace) {
      history.replaceState(null, '', newURL);
    } else {
      history.pushState(null, '', newURL);
    }
  }

  return {
    getParam,         // utils.getParam("lang") → "en"
    getParamArray,    // utils.getParamArray("tags") → ["js", "react"]
    getAllParams,     // utils.getAllParams() → { lang: "en", tags: "js,react" }
    toQueryString,
    updateQuery
  };
})();
/*
GET INPUT FROM URL EXAMPLE


console.log(utils.getParam("lang"));             
// Output: "en"

console.log(utils.getParamArray("ge"));          
// Output: ["a", "b", "c"]

console.log(utils.getParamArray("tags"));        
// Output: ["js", "react", "css"]

console.log(utils.getAllParams());               
// Output: { ge: "a,b,c", lang: "en", tags: "js,react,css" }

utils.updateQuery({ page: 2 });                  
// Output: updates URL to include/replace ?page=2










*/