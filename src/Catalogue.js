import React from "react";
import { useState } from 'react';
import { data } from './data';
import Goods from './Goods';
import Buttons from './Buttons';
import './App.css';



function Catalogue() {

  const [goods, setGoods] = useState(data);

  const chosenGoods = (searchTerm) => {

  const newGoods = data.filter(element => element.searchTerm === searchTerm);
  setGoods(newGoods); 

}

  return <div>

  <Buttons filteredGoods = {chosenGoods}/>
  <Goods anyGoods={goods}/>

</div>

}

export default Catalogue;     