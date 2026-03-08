import {Outlet} from "react-router-dom";
import Pagination from "../components/Pagination.tsx";

const PaginationLayout = () => {
    return (
        <div>
            <Outlet/>
            <Pagination/>
        </div>
    );
};

export default PaginationLayout;