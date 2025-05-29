import React, { useContext } from "react";
import DataContent from "@/view/Component/dataContent";
export const ChildComponent = () => {
  const dataContext = useContext(DataContent);

  const handleAdd = () => {
    dataContext.dispatch({ type: "add", payload: 2 });
  };

  const handleReduce = () => {
    dataContext.dispatch({ type: "reduce", payload: 1 });
  };

  return (
    <div>
      ChildComponent:
      <p>name: {dataContext.name}</p>
      <p>age: {dataContext.age}</p>
      <p>school: {dataContext.school}</p>
      <button onClick={handleAdd}>点击母组件的count+2</button>
      <button onClick={handleReduce}>点击母组件的count-1</button>
    </div>
  );
};
