import type {ISimpsonModel} from "../../model/ISimpsonModel.ts";
import {type ReactNode} from "react";

interface CharacterComponentProps {
    item: ISimpsonModel
    children: ReactNode;
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className="bg-sky-600 border-solid border-purple-800 p-10 rounded-xl m-5">
            <h3 className="pb-5 font-bold">{item.name} {item.surname}</h3>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;