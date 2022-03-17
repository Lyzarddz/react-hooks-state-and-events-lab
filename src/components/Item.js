import React, { useState } from "react";

function Item({ name, category }) {

    const [itemIn, setItemIn] = useState(false)

    function handleItem(){
    setItemIn((itemIn)=> !itemIn)
  }





  return (
    <li className={itemIn ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItem}  className={itemIn ? "Remove From Cart" : "Add To Cart"}>{itemIn ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
