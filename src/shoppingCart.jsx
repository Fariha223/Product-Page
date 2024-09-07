import React, { useState } from 'react';
import { FaTimes, FaTrash } from 'react-icons/fa';
import perelel from "./images/medicine/perelel.png";
import pills from "./images/medicine/pills.png";
import handCream from "./images/medicine/hand_cream.png";

const cartItems = [
    {
      id: 1,
      name: 'Liposomal Vitamin C',
      image: perelel,
      quantity: 2,
      price: 4332.23
    },
    {
      id: 2,
      name: 'Hand Cream',
      image: handCream,
      quantity: 1,
      price: 1000.00
    },
    {
      id: 3,
      name: 'Vitamins',
      image: pills,
      quantity: 1,
      price: 800.00
    }
];

const ShoppingCart = ({ cartOpen, cartClose }) => {
    const [items, setItems] = useState(cartItems);

    const handleQuantity = (id, amount) => {
        setItems(items.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        ));
    };

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform ${cartOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className='flex justify-between items-center p-4 border-b border-gray-300'>
                <h2 className='text-lg font-medium mt-14'>Shopping Cart</h2>
                <button onClick={cartClose} className="text-xl mt-14">
                    <FaTimes />
                </button>
            </div>
            <div className="p-4">
                {items.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {items.map(item => (
                            <div key={item.id} className="flex items-center mb-4 border-b border-gray-300 pb-4">
                                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover mr-4" />
                                <div className="flex-grow">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-gray-600">Price: BDT {item.price.toFixed(2)}</p>
                                    <div className="flex items-center mt-2">
                                        <button 
                                          onClick={() => handleQuantity(item.id, -1)}
                                          disabled={item.quantity <= 1}
                                          className="bg-gray-300 px-2 py-1 rounded-l"
                                        >
                                            -
                                        </button>
                                        <input 
                                          type="text" 
                                          value={item.quantity} 
                                          readOnly 
                                          className="w-12 text-center border border-gray-300"
                                        />
                                        <button 
                                          onClick={() => handleQuantity(item.id, 1)}
                                          className="bg-gray-300 px-2 py-1 rounded-r"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button 
                                  onClick={() => handleDelete(item.id)}
                                  className="ml-4 text-red-600"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                        <div className="flex justify-between mt-4 font-semibold">
                            <p>Subtotal:</p>
                            <p>BDT {calculateSubtotal().toFixed(2)}</p>
                        </div>
                        <button className="bg-[#042f2e] text-white w-full py-2 mt-4 rounded-2xl">Checkout</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
