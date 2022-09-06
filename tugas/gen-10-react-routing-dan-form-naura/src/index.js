import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Others from './pages/Others';
import Menu from './pages/Menu';
import Pakaian from './pages/Pakaian';
import Makanan from './pages/Makanan';
import FormHandling from './pages/FormHandling';
import Appetizer from './pages/makanan/Appetizer';
import MainCourse from './pages/makanan/MainCourse';
import Dessert from './pages/makanan/Dessert';
import Dessert1 from './pages/makanan/Dessert1';
import Dessert2 from './pages/makanan/Dessert2';
import Detail1 from './pages/makanan/Detail1';
import Detail2 from './pages/makanan/Detail2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Home />} />
          <Route path="/:others" element={<Others />} />

          <Route path="menu" element={<Menu />} >
            <Route path="form" element={<FormHandling />} />
            <Route path="pakaian" element={<Pakaian />} />
            <Route path="makanan" element={<Makanan />} >
              <Route path="appetizer" element={<Appetizer />} />
              <Route path="maincourse" element={<MainCourse />} />
              <Route path="dessert" element={<Dessert />} >
                <Route path="001" element={<Dessert1 />} >
                  <Route path="detail1" element={<Detail1 />} />
                </Route>
                <Route path="002" element={<Dessert2 />} >
                  <Route path="detail2" element={<Detail2 />} />
                </Route>
              </Route>
            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
