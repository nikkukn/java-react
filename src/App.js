import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ListStudentComponent from './components/ListStudents/ListStudentsComponent';
import NavBar from './components/Navigation/NavBar'
import AddStudent from './components/AddStudents/AddStudent';
import UpdateStudent from './components/UpdateStudents/UpdateStudents';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ListStudentComponent} />
          <Route path="/students" component={ListStudentComponent} />
          <Route path="/add-students" component={AddStudent} />
          <Route path="/update-students/:id" component={UpdateStudent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
