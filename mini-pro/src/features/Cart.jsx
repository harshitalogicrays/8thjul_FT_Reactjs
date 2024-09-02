import React from 'react'
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
const Cart = () => {
    const cartItems = [
        {
          id: 1,
          name: 'Product 1',
          price: 29.99,
          quantity: 2,
          imageSrc: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          name: 'Product 2',
          price: 49.99,
          quantity: 1,
          imageSrc: 'https://via.placeholder.com/150',
        },
      ];
    
      const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
      return (
        <div className="max-w-7xl mx-auto p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-12">
        
        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-lg p-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-6 border-b border-gray-200">
                <div className="flex items-center gap-6">
                  <img src={item.imageSrc} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-4">
                      <label htmlFor={`quantity-${item.id}`} className="mr-3 text-gray-700">
                        Quantity:
                      </label>
                      <input
                        type="number"
                        id={`quantity-${item.id}`}
                        name={`quantity-${item.id}`}
                        min="1"
                        value={item.quantity}
                        className="w-16 p-2 border border-gray-300 rounded-lg text-center"
                      />
                    </div>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <TrashIcon className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        </div>

     
        <div className="lg:w-1/3">
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-700">Shipping</span>
              <span className="font-medium text-gray-900">$5.00</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-6">
              <span>Total</span>
              <span className="text-gray-900">${(totalPrice + 5).toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-200">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart