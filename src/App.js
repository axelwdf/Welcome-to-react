import './App.css';

function App() {

  return (
    <div className="App">
      <Aboutme />
      <Myhobbies />
      <Freetime/>
      <Food/>
      <Mystack/>
    </div>
  );
}

// Nuevo Componente

const Aboutme = () =>{
  const aboutMe = ['Axel', '13', 'Fast and furious', 'Hello']
  return (
    <div className="about">
      <ul>
        <li> <b>Nombre:</b> {aboutMe[0]} </li>
        <li> <b>Edad:</b> {aboutMe[1]} </li>
        <li> <b>Película fav:</b> {aboutMe[2]} </li>
        <li> <b>Canción:</b> {aboutMe[3]} </li>
      </ul>
    </div>
  );
}
// MyHobbies

const Myhobbies = () =>{
  const hobbies = ['cantar', 'bailar', 'pintar', 'Hello']
  return (
    <div className="Card">
      <h2>Hobbies</h2>
      <ul>
        <li> {hobbies[0]} </li>
        <li>  {hobbies[1]} </li>
        <li> {hobbies[2]} </li>
        <li> {hobbies[3]} </li>
      </ul>
    </div>
  );
}

// Tiempo Libre
const Freetime = () =>{
  const freetime = ['Leer', 'Programar', 'Ver películas', 'Estar con mi perrito']
  return (
    <div className="Card-two">
      <h2>Tiempo libre</h2>
      <ul>
        <li> {freetime[0]} </li>
        <li>  {freetime[1]} </li>
        <li> {freetime[2]} </li>
        <li> {freetime[3]} </li>
      </ul>
    </div>
  );
}
// Comida Favorita
const Food = () => {
  const Foodfav = ['Pizza', 'Hamburguesa', 'Pozole', 'Tacos']
  return (
    <div className="Card-three">
      <h2>Comida favorita</h2>
      <ul>
        <li> {Foodfav[0]} </li>
        <li>  {Foodfav[1]} </li>
        <li> {Foodfav[2]} </li>
        <li> {Foodfav[3]} </li>
      </ul>
    </div>
  );
}

// Mi stack
const Mystack = () =>{
  const stack = ['HTML5', 'CSS3', 'JavaScript', 'React']
  return (
    <div className="Card-four">
      <h2>My stack es</h2>
      <ul>
        <li> {stack[0]} </li>
        <li>  {stack[1]} </li>
        <li> {stack[2]} </li>
        <li> {stack[3]} </li>
      </ul>
    </div>
  );
}
export default App;