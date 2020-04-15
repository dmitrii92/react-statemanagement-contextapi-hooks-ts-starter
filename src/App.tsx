import React from "react";

import {Switch, Route, BrowserRouter} from "react-router-dom";

import {NavBar} from "./components/navbar/NavBar";
import {Home} from "./components/home/Home";
import {InputForm} from "./components/inputform/InputForm";
import {View} from "./components/view/View";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/create" component={InputForm}/>
            <Route path="/view" component={View}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
