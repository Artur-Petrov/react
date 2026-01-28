import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>
     <MyComponent text={'asdasd'}/>
     <MyComponent text={'qweqweqwe'}/>
     <MyComponent text={'Hello'} />
        <ul>
            <li>asd</li>
            <li>asd</li>
            <li>asd</li>
        </ul>
        {/*{*/}
        {/*    MyComponent({text:"Hello from MyComponent"})*/}
        {/*}*/}
    </>
  )
}

export default App
