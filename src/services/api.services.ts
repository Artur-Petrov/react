import axios from "axios";
import type {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-Type': 'application/json'},
});

export const getAllCars= async():Promise<ICar[]>=>{
    const axiosResponse = await axiosInstance.get<ICar[]>('/cars');
    return axiosResponse.data;
}

export const addCar= async(car:ICar) => {
    await axiosInstance.post('/cars', car);
}