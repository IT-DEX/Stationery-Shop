import { useState } from 'react';
function Goods({anyGoods}){

  const [showText, setShowText] = useState(false);
 
  return (
      <div className="products">
      
      

          {anyGoods.map((element => {
            const {id, name, price, image, description, showMore} = element;

            const showTextClick = (element) => {
              element.showMore = !element.showMore
              setShowText(!showText)
            }
            
    
           
           return (     
              <div className="product-card" key={id}>
                <img src={image} width="300px" height="400px" alt='product'/>
                <div>
                    <h3>{name}</h3>
                    <h4>$ {price}</h4>
                    <p> {showMore? description : description.substring(0, 170) + "...."} 
                    <p>
                    <button className='showtext-btn' onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show full description"}</button></p>
                    </p>
                </div>
              </div>
            )
          }))}
    
        </div> 
  )
      }
      
      export default Goods;