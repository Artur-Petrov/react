const BaseUrl = import.meta.env.VITE_API_URL;

export const getAll = async <T> (endpoint: string):Promise<T>=>{
    return await fetch(`${BaseUrl}${endpoint}`)
        .then((response) => response.json())
}
