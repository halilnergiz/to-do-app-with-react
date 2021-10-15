import React from "react";
import SimpleMap from "./GoogleMapAPI/Map";
import TaskList from "./ToDoDb/ToDoList";


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
