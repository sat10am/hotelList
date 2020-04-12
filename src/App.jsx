import 'react-input-range/lib/css/index.css'

import React, {useContext} from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import HomePage from './pages/home/HomePage'
import HotelListPage from './pages/list/HotelListPage'

  
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/hotels"} component={HotelListPage} />
      </Switch>
      </BrowserRouter>
    </>
  )
}
