import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import './App.css';
import Login from "./auth/login/login";
import Register from "./auth/register/Register";
import Student from "./auth/studant/Student";
import Contributor from "./auth/contributor/Contributor";
import { useState } from "react";
import Loader from "./shared/components/Loader/Loader";

function Header() {
  return (
    <header className="a-header a-header-1">
      <div className="a-block a-block-1 flex flex-row flex-h-center">
        <div className="col-1">
          <a href="index.html" className="a-txt txt-1 decomart fs-medium f-600">aa</a>
        </div>

        <div className="col-2">
          <h5 className="a-txt txt-2 roboto-regular" id="title">Acrônimos</h5>
        </div>

        <div className="col-3"></div>
      </div>
    </header>

  );
}

function Dashboard({ children }) {
  return (
    <section className="a-section dashboard" id="dashboard">
      {children}
    </section>
  );
}

function App() {
  const [users, setUsers] = useState([
    { username: 'adm', password: 'adm' }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <BrowserRouter>
      <div className='App bg-darkblue-palette txt-color-smoke'>
        <Header />
        <Dashboard>
          <Routes>
            <Route element={<Login users={users} loading={isLoading} onLoading={setIsLoading} />} path="/" exact />
            <Route element={<Login users={users} loading={isLoading} onLoading={setIsLoading} />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Student />} path="/register/student" />
            <Route element={<Contributor />} path="/register/contributor" />
          </Routes>
        </Dashboard>
        <Loader loading={isLoading} />
        <Outlet />
      </div>
    </BrowserRouter>
  );
}

export default App;
