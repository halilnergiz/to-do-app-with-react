import React from "react";
import TaskList from "./ToDoDb/ToDoList";
import PageView from './view/PageView'

class App extends React.Component {
  render() {
    return (
      <div>
        {TaskList.map(task => console.log(task))}
        <PageView/>
      </div>
    );
  }

}

export default App;