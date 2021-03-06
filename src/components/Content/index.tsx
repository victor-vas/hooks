import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';

import Home from '../../views/examples/Home';
import NotFound from '../../views/examples/NotFound';
import UseState from '../../views/examples/UseState';
import UseEffect from '../../views/examples/UseEffect';
import UseRef from '../../views/examples/UseRef';
import UseCallback from '../../views/examples/UseCallback';
import UseMemo from '../../views/examples/UseMemo';
import UseContext from '../../views/examples/UseContext';
import UseReducer from '../../views/examples/UseReducer';
import UseCustom from '../../views/examples/UseCustom';

import BirthdayReminder from '../BirthdayReminder';
import Tours from '../Tours';
import Reviews from '../Reviews';
import Accordion from '../Accordion';
import FoodMenu from '../FoodMenu';
import Tabs from '../Tabs';
import Slider from '../Slider';
import LoremIpsum from '../LoremIpsum';
import ColorGenerator from '../ColorGenerator';
import GroceryBud from '../GroceryBud';
import Navbar from '../Navbar';
import SidebarModal from '../SidebarModal';
import Submenu from '../Submenu';
import Cart from '../Cart';
import Cocktail from '../Cocktail';

const Content = () => (
  <main className="Content">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/useState">
        <UseState />
      </Route>
      <Route path="/birthday-reminder">
        <BirthdayReminder />
      </Route>
      <Route path="/lorem-ipsum">
        <LoremIpsum />
      </Route>
      <Route path="/color-generator">
        <ColorGenerator />
      </Route>
      <Route path="/useEffect">
        <UseEffect />
      </Route>
      <Route path="/tours">
        <Tours />
      </Route>
      <Route path="/reviews">
        <Reviews />
      </Route>
      <Route path="/accordion">
        <Accordion />
      </Route>
      <Route path="/food-menu">
        <FoodMenu />
      </Route>
      <Route path="/tabs">
        <Tabs />
      </Route>
      <Route path="/slider">
        <Slider />
      </Route>
      <Route path="/grocery-bud">
        <GroceryBud />
      </Route>
      <Route path="/useRef">
        <UseRef />
      </Route>
      <Route path="/navbar">
        <Navbar />
      </Route>
      <Route path="/useCallback">
        <UseCallback />
      </Route>
      <Route path="/useMemo">
        <UseMemo />
      </Route>
      <Route path="/useContext">
        <UseContext />
      </Route>
      <Route path="/sidebar-modal">
        <SidebarModal />
      </Route>
      <Route path="/submenu">
        <Submenu />
      </Route>
      <Route path="/cocktail">
        <Cocktail />
      </Route>
      <Route path="/useReducer">
        <UseReducer />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/useCustom">
        <UseCustom />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </main>
);

export default Content;
