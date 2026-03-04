import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

const Some = () => {

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        let pg = query.get('pg');

        fetch('https://reqres.in/api/users?page=' + pg)
            .then((response) => response.json())
            .then((value) => {
                console.log(value)
            });
    }, [query]);

    return (
        <div>

        </div>
    );
};

export default Some;