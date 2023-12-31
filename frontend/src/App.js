import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import ViewStudents from './components/ViewStudents';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StudentForm />
      <ViewStudents />
    </div>
  );
}

export default App;
