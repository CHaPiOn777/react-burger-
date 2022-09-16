import { useSelector } from 'react-redux';
import { Orders } from '../../components/Orders/Orders';
import { Stats } from '../../components/Stats/Stats';
import style from './feed.module.css';

export const Feed = () => {
  const orders = useSelector(store => store.wsReduser.orders);

  return (
      <section className={style.feed}>
        <h1 className='text text_type_main-large mt-10 mb-5 '>Лента заказов</h1>
        <div className={`${style.orders} `}>
          {orders &&
            <Orders orders={orders} />}
          <Stats />
        </div>
      </section>
  );
};
