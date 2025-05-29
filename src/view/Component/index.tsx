import React, { useContext, useReducer, useRef } from "react";
import DataContent from "@/view/Component/dataContent";
import { ChildComponent } from "@/view/Component/ChildComponent";
import { ChildComp } from "@/view/Component/ChildComp";

const initialCount = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.payload;
    case "reduce":
      return state - action.payload;
    default:
      return state;
  }
};
const Data = () => {
  const [count, dispatch] = useReducer(reducer, initialCount);

  const childRef = useRef(null);

  return (
    <div>
      <DataContent.Provider
        value={{ name: "lisi", age: "19", school: "ccnu", count, dispatch }}
      >
        在母组件的count为：{count}
        <ChildComponent />
        <br></br>
        <button onClick={() => childRef.current?.handleClick()}>
          点击我调用子组件的方法
        </button>
        <ChildComp ref={childRef} />
      </DataContent.Provider>
    </div>
  );
};

export default Data;
