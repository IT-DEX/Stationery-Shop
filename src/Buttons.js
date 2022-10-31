import ButtonsTwo from "./ButtonsTwo";

function Buttons({filteredGoods}) {

  return (
    
    <div className="cont">
        
        <button className="menuButton" onClick={() => filteredGoods("pen")}>Pens</button>
        <button className="menuButton" onClick={() => filteredGoods("pencil")}>Pencils</button>
        <button className="menuButton" onClick={() => filteredGoods("ruler")}>Rulers</button>
        <button className="menuButton" onClick={() => filteredGoods("scissors")}>Scissors</button>
        <button className="menuButton" onClick={() => filteredGoods("notebook")}>Notebooks</button>
        <button className="menuButton" onClick={() => filteredGoods("marker")}>Markers</button>
        <button className="menuButton" onClick={() => filteredGoods("eraser")}>Erasers</button>
        <ButtonsTwo/>
    </div>
      
     )
  }
  
  export default Buttons;