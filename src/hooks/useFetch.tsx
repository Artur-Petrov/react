import {useEffect, useState} from "react";

export const useFetch = <T,>(url:string, defValue:T)=>{

    const [object, setObject] = useState<T>(defValue)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                setObject(response)
            });
    }, []);
    return object;
}