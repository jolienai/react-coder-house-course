import React, { useState } from 'react';
import { ShoppingBagIcon} from '@heroicons/react/24/outline'

interface ShoppingCartProps {
  // Define props here (if any)
  itemCount: number;
}

interface ShoppingCartState {
  itemCount: number;
}

const CartWidget: React.FC<ShoppingCartProps> = ({itemCount}) => {
  const [state, setState] = useState<ShoppingCartState>({
    itemCount: 0,
  });

  return (
    <>
      {/* Cart */}
      <div className="ml-4 flow-root lg:ml-6">
        <a href="#" className="group -m-2 flex items-center p-2">
          <ShoppingBagIcon
            className="h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-gray-900"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-gray-500 group-hover:text-gray-900">{itemCount}</span>
          <span className="sr-only">items in cart, view bag</span>
        </a>
      </div>
    </>
  );
};

export default CartWidget;
