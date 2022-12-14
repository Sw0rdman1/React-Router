import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import Invoice from './routes/Invoice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path = "/expenses" element = {<Expenses/>} />
        <Route path = '/invoices' element = {<Invoices/>}>
          <Route path = ":invoiceID" element = {<Invoice/>} />
        </Route>

        <Route path = "*" element = {
          <main style={{ padding: "1rem"}}>
            <p>There's nothing here!</p>
          </main>
        }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
