import type {FC} from "react";

type MyComponentPropType = {text: string}

// function MyComponent({text}: MyComponentPropType) {
//     return <div>{text}</div>
// }

// function expression, functional component
// const MyComponent = ({text}: MyComponentPropType) => {
//     return <div>{text}</div>
// }
const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return <div>{text}</div>
}
export default MyComponent;