
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const AddedProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProductData();
    }, []);

    const fetchProductData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products/addtocart'); // Replace '/api/products' with your actual API endpoint
        const data = await response.json();
        
       
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
      };
    
      const decrementQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
  return (
    <div className='bg-slate-200 p-2 flex gap-4 rounded border-slate-300'>
        <div className='p-3 bg-white rounded overflow-hidden'>
            <img src={products.image} />


        </div>
        <div className='flex flex col gap-1 w-full'>
            <div className='flex justify-between'>
            <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl">{products.name}</h3>
           
            </div>
            <p className='text-slate-500 font-medium'>{products.category}</p>
            <p className=" font-bold text-base">
          <span className="text-red-500 ">₹</span>
          <span>{products.price}</span>
        </p>
        <div className='flex justify-between'>
            <div className='flex gap-3 items-center'>
                <button className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 " onClick={incrementQuantity }>+</button>
                <p className="font-semibold p-1">{products.quantity}</p>
                <button className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 " onClick={decrementQuantity}>-</button>


            </div>

        </div>

        </div>

    </div>
  )
}

export default AddedProduct;