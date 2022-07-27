import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./styles/index.scss";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
1. JSX元素，不要用引号包起来，这不是字符串，而是一个JS对象（createElement创建的）
2. JSX中，如果想要混入JS代码，需要用一个大括号包起来(只能写表达式，而不能写语句)
3. 因为class现在是JS的关键字，所以JSX中元素的class属性名要用 className代替（防止冲突）
4. 如果绑定样式，样式中短横线连接的属性名，要换成小驼峰的形式（或者直接用字符串做属性名）
5. 一个JSX表达式，有且只能有一个根标签
6. 标签必须闭合（无论是单标签还是多标签）
7. 标签首字母的问题：小写->DOM元素，大写->组件 （React中）
8. 如果大括号中，求值是一个数组，则数组会自动展开
9. 在属性中嵌入表达式的值的时候，不需要加引号（特别提醒从Vue转过来的同学）
10. 延展属性，如果要给元素传递一组属性，可以使用 ...属性对象  的形式
*/

let name = "张三";
let h1Style = {
  color: "red",
  "font-size": "32px",
};

let divOptions = {
  id: "box",
  className: "divvv",
  title: "啦啦啦啦",
};

// let ids = books.map((x) => x.id);
// let names = books.map((x) => x.name);

// let liArray = [];
// for(let i=0; i<books.length; i++) {
//   let li = <li>{books[i].name}</li>;
//   liArray.push(li);
// }

let List = ({ books }) => {
  return (
    <ul>
      {books.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

let useInputAndShow = () => {
  const [x, setX] = useState("");
  return (
    <>
      <input value={x} onInput={(e) => setX(e.target.value)} />
      <h1>{x}</h1>
    </>
  );
};

let App = (props) => {
  return (
    <>
      {useInputAndShow()}
      <hr />
      {useInputAndShow()}
      <hr />
      {useInputAndShow()}
      <hr />
      {useInputAndShow()}
      <hr />
      {useInputAndShow()}
      <hr />
      {useInputAndShow()}
      <hr />
      {useInputAndShow()}
      <hr />
      {useInputAndShow()}
      <hr />
      {useInputAndShow()}
      <hr />
    </>
  );
};

root.render(<App />);
