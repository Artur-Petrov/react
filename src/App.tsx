import {useState} from "react";

const App = () => {
  let [counter, setCounter] = useState(0);
  //useState це хук приймає початкове значення, повертає масив з 2 об'єктами
  // 1 об'єкт це getter, 2 - setter\
  // дозволяє нам зберігати фіксувати і змінювати стан нашої компоненти
    return (
        <div>
          <h2>{counter}</h2>
            <button onClick={()=>{
              setCounter(++counter);
            }}>increment</button>
            <button onClick={()=>{
              setCounter(--counter);
            }}>decrement</button>
        </div>
    );
};

export default App;