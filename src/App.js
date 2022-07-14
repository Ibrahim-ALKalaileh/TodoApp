import Card from "./components/Todo_Card";


function App() {
  return (
    <div className="modal" >
      <h1>Todo List</h1>
      <Card text='cleaning the house'/>
      <Card text="having a shower"/>
      <Card text="watching the course"/>
     
    </div>
  );
}

export default App;
