import React, { useState } from 'react';

interface ShoppingCartProps {
  // Define props here (if any)
}

interface ShoppingCartState {
  itemCount: number;
}

const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const [state, setState] = useState<ShoppingCartState>({
    itemCount: 0,
  });

  // const handleAddToCart = () => {
  //   setState((prevState) => ({ ...prevState, itemCount: prevState.itemCount + 1 }));
  // };

  // TODO: add styles to the component
  return (
    <div className="shopping-cart">
      <img src="https://img.freepik.com/free-icon/shopping-cart-checkered-design_318-50865.jpg?t=st=1690321014~exp=1690321614~hmac=3741510b8fe2e1410aee9ef0e3bc5819708f05da95a82eb196c95e07c0980b2d" 
        alt="Shopping Cart" width={40} height={40} />
      <span>{state.itemCount} items</span>
      {/* <span>Some text here</span>
      <button onClick={handleAddToCart}>Add to Cart</button> */}
    </div>
  );
};

export default ShoppingCart;
