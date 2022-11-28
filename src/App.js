//import logo from './logo.svg';
import './App.css';
//import GreetingStyled from './components/pure/greetingStyled';
//import Clock from './ejercicios/clock';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
//import TaskListComponent from './components/container/task_list';
import ContactList from './ejercicios/leccion 9/contact_list';
//import Father from './components/container/father';
//import ContactListComponent from './components/container/contact_list';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3';
//import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*componente propio Greeting.jsx*/}
        {/* <Greeting name="Lalala"/> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Germán"/> */}
        {/* Componente de listado de tarea */}
        {/* <ContactListComponent/> */}
        {/* Ejemplos de usos de hooks */}
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto/> */}
        {/* <Ejemplo4 nombre="PEPE"/>
        <h3> contenido del props.children</h3> */}
        {/* <GreetingStyled name="Germán"/> */}
        {/* <Clock/> */}
        {/* </header> */}
        {/* Gestion de eventos*/}
        {/* <Father/> */}
        {/* <TaskListComponent/> */}
        <ContactList/>

    </div>
  );
}

export default App;
