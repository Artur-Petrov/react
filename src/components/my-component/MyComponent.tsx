import type {FC} from "react";

type MyComponentPropType = {
    title: string;
    children?: string
    // ReactNode якщо тип children має бути компонентом
    // children: ReactNode;
};

// function MyComponent({text}: MyComponentPropType) {
//     return <div>{text}</div>
// }

// function expression, functional component
// const MyComponent = ({text}: MyComponentPropType) => {
//     return <div>{text}</div>
// }
const MyComponent: FC<MyComponentPropType> = ({title, children}) => {
    return <div className='text-3xl font-bold underline'>
        <h2>{title}</h2>
        <p>{children}</p>
    </div>
}
export default MyComponent;