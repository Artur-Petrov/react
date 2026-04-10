import {type FC, memo} from "react";

const UserComponent: FC<{foo:() => void}> = memo(() => {
    return (
        <div>
            user component
        </div>
    );
});

export default UserComponent;