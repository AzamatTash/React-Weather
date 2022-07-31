import classes from './App.module.sass';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className={classes.container}>
        <Header/>
    </div>
  );
}

export default App;
