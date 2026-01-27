import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>
     <MyComponent text={'asdasd'}/>
     <MyComponent text={'qweqweqwe'}/>
     <MyComponent text={'Hello'} />
        {/*{*/}
        {/*    MyComponent({text:"Hello from MyComponent"})*/}
        {/*}*/}
    </>
  )
}

export default App
