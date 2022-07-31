import classes from './App.module.sass';
import Header from './components/Header/Header';
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDay/ThisDayInfo/ThisDayInfo";

const App = () => {
  return (
    <div className={classes.container}>
        <Header/>
        <div className={classes.currentDay}>
            <ThisDay/>
            <ThisDayInfo/>
        </div>
    </div>
  );
}

export default App;
