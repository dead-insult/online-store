import {$authHost, $host} from './index';
import { jwtDecode } from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data}= await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data}= await $host.get('api/brand')
    return data
}

export const createGood = async (good) => {
    const {data} = await $authHost.post('api/good', good)
    return data
}

export const fetchGoods = async (typeId, brandId) => {
    const {data} = await $host.get('api/good', {params: {
            typeId, brandId
        }})
    return data
}

export const fetchOneGood = async (id) => {
    const {data} = await $host.get('api/good/' + id)
    return data
}

export const addToBasket = async (goodId) => {
    const {response} = await $authHost.post('api/basket', goodId)
    return response
}

export const getBasket = async (userId) => {
    const {data} = await $authHost.get('api/basket', userId)
    return data
}