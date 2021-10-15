import React from "react";
import SimpleMap from "./Map";
import TaskList from "./ToDoList";


class App extends React.Component {
  render() {
    return (
      <div>
        {TaskList.map(task => console.log(task))}

        <SimpleMap></SimpleMap>
      </div>
    );
  }

}

export default App;
