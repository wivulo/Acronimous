import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import './App.css';
import './fontawesome.css'
import Login from "./auth/login/login";
import Register from "./auth/register/Register";
import Student from "./auth/studant/Student";
import Contributor from "./auth/contributor/Contributor";
import { useState, useEffect } from "react";
import Loader from "./shared/components/Loader/Loader";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./shared/components/notFound";


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

function Section({ children }: any) {
  return (
    <section className="a-section dashboard" id="dashboard">
      {children}
    </section>
  );
}

interface User{
  username: string;
  password: string;
}

function App() {
  const [users, setUsers] = useState([
    { username: 'adm', password: 'adm' }
  ]);
  const [user, setUser] = useState<User>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

  let checkUser = JSON.parse(localStorage.getItem("user")!)
  if(checkUser){
    setUser(checkUser)
  }

  }, [])

  return (
    <BrowserRouter>
      <div className='App bg-darkblue-palette txt-color-smoke'>
        <Header />
        <Section>
          <Routes>      
            <Route element={<Login users={users} onLogin={setUser} onLoading={setIsLoading} />} path="/" />
            <Route element={<Login users={users} onLogin={setUser} onLoading={setIsLoading} />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Student />} path="/register/student" />
            <Route element={<Contributor />} path="/register/contributor" />
            <Route element={<Dashboard user={user} />} path={'/' + user?.username + '/*'} />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </Section>
        <Loader isLoading={isLoading} />
        <Outlet />
      </div>
    </BrowserRouter>
  );
}

export default App;
