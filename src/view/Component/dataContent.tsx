import React from "react";

interface IData {
  name: string;
  age: string;
  school?: string;
  dispatch?: any;
  count?: number;
}

const initialData = {
  name: "zhangsan",
  age: "18",
};

const DataContent = React.createContext<IData>(initialData);

export default DataContent;
