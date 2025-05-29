import React, { useState, useImperativeHandle } from "react";

/**
 * 
1、子组件内部先定义一个 xxx 函数
2、通过useImperativeHandle函数，将 xxx函数包装成一个对象，并将该对象添加到父组件内部定义的ref中。
3、若 xxx 函数中使用到了子组件内部定义的变量，则还需要将该变量作为 依赖变量 成为useImperativeHandle第3个参数，上面示例中则选择忽略了第3个参数。
4、若父组件需要调用子组件内的 xxx函数，则通过：res.current.xxx()。
5、请注意，该子组件在导出时必须被 React.forwardRef()包裹住才可以。
 */
export const ChildComp = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };

  useImperativeHandle(
    ref,
    () => {
      return { handleClick };
    },
    [visible, handleClick]
  );
  return (
    <div>
      <span>我是子组件：</span>
      {visible && <span>母组件调用我的方法</span>}
    </div>
  );
});
