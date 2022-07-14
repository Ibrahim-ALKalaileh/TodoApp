import Card from "./components/Todo_Card";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div className="modal" >
      <h1>Todo List</h1>
      <Card text='cleaning the house'/>
      <Card text="having a shower"/>
      <Card text="watching the course"/>
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;
