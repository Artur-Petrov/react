import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>
     <MyComponent title={'Header 1'}>
            Lorem ipsum dolor sit.
         </MyComponent>
     <MyComponent title={'Header 2'}/>
     <MyComponent title={'Header 3'}/>
        <ul>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
        </ul>
        {
            MyComponent({title:"Hello from MyComponent"})
        }
    </>
  )
}

export default App;
