import React from "react";
import { useState } from 'react';
import { data } from './data';
import Goods from './Goods';
import ButtonsTwo from "./ButtonsTwo";
import './App.css';

function AllGoods() {

const [goods, setGoods] = useState(data);

const allGoods = (all) => {

  const allTheGoods = data.filter(element => element.all === all);
  setGoods(allTheGoods); 

}
  return <div>

  <ButtonsTwo croco = {allGoods}/>
  <Goods anyGoods={goods}/>

</div>

}

export default AllGoods; 