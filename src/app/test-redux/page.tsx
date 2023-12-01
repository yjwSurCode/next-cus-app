'use client'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cart';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const ReduxPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const _cart = useSelector<{ cart: any }>((state) => state.cart);
  console.log(_cart, '_cart');

  return (
    <div>
    <h1> redux page</h1>
      <div>_cart:{JSON.stringify(_cart) || 'redux'}</div>
      <button onClick={() => dispatch(addToCart([{ id: 123 }]))}>
        Add to Cart
      </button>
      <div onClick={()=>router.push('test-redux/111')} > jump</div>
    </div>
  );
};

export default ReduxPage;
