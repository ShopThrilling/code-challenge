export const API_ROOT = process.env.REACT_APP_API_ROOT
export const API_KEY = process.env.REACT_APP_API_KEY


export const params = {
  'api-key': `${API_KEY}`
}

// NOTE: allows for additional parameters
export const get = async(url) => {
  url += '?'
  Object.entries(params).map(([key, val]) => (url += `&${key}=${val}`))
  return fetch(url)
}
