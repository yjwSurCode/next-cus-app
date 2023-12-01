'use client'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '@/redux/cart';
import { useSelector } from 'react-redux';

const ProductCard = () => {
  const dispatch = useDispatch();
  const _cart = useSelector<{ cart: any }>((state) => state.cart);

  console.log(_cart, '_cart');

  return (
    <div>
      <h1>code test redux detail page</h1>
      <div>_cart:{JSON.stringify(_cart) || ''}</div>
      <button
        onClick={() => dispatch(removeFromCart([{ id: 123, name: '123' }]))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
