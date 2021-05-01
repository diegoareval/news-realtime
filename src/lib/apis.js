import Axios from "axios"

const getHeaders = (withAuthorization = false) => {
    const authorization = withAuthorization
      ? {
        Authorization: '',
        }
      : {}
  
    return {
      ...authorization,
      'Content-Type': 'application/json',
    }
  }
  const API_KEY = process.env.REACT_APP_API_KEY
  export const fetchNews = async (q = "tesla", date = "2021-04-01") => {
    return Axios.get(`https://newsapi.org/v2/everything?q=${q}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}`, {
      headers: getHeaders(),
    })
      .then((response) => {
        if (response.data) {
          return {
            news: response.data,
            status: true
          }
        } else {
          return {
            status:false,
            message:  "could not fetch news",
          }
        }
      })
      .catch((error) => {
          return {
            status:false,
            message:  "could not fetch news",
          }
      })
  }