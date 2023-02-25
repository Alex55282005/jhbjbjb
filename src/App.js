import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  axios.get("https://hiveapp.com.ua/api/users").then((response) => {
    console.log(response);
  }).catch();
  return(
    <h2>Hello world!</h2>
  );
}

export default App;
