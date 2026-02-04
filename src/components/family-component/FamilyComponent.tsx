import {simpsons} from "../../data/Data.ts";
import type {ISimpsonModel} from "../../model/ISimpsonModel.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div className="m-8 p-8">
            {
                simpsons.map((value: ISimpsonModel, index: number) => (<CharacterComponent item={value} key={index}>
                    {value.info}
                </CharacterComponent>))
            }
        </div>
    );
};

export default FamilyComponent;