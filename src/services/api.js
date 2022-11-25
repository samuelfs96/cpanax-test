import axios from 'axios'

const api_url = 'https://dummyjson.com/'

export const getProducts = async (maxItems) => {
    const { data } = await axios.get(api_url + 'products?limit=' + maxItems)
    return data
}