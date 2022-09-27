import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
  return (
  <div className="header">
    <h1>Bookkeeper</h1>
  
  <nav style={{
    borderBottom: "solid 1px",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
  }}>

    <Link to="/invoices">Invoices</Link> | {"  "}
    <Link to = "/expenses">Exprenses</Link>

  </nav>


  <Outlet />
  
  </div>    
  );
}

export default App;
