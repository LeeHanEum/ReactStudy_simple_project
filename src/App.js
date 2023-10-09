import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
        <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/counter" element={<Counter />}/>
                <Route path="/todolist" element={<TodoList />}/>
                <Route path="/post" element={<Post />}/>
            </Routes>
        <Footer />
    </div>
  );
}

export default App;
