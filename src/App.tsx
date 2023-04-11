import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Home from "./paginas/Home";
import Favourites from "./paginas/Favourites";
import PageDetail from "./paginas/PageDetail";
import { store } from "./store";
import Header from "./componentes/layout/Header";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favoritos" element={<Favourites />} />
          <Route path="detalle" element={<PageDetail />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
