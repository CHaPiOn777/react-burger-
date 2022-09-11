
import style from './Stats.module.css'
export const Stats = () => {
  return (
    <div className={style.stats}>
          <div className={style.ordersNumberContainer}>
            <div className={style.numberOrders}>
              <h3 className={'text text_type_main-medium pb-2'}>Готовы:</h3>
              <ul className={style.listNumberOrders}>
                <li className='text text_type_digits-default text_color_success'>034533</li>
              </ul>
            </div>
            <div className={style.numberOrders}>
              <h3 className={'text text_type_main-medium pb-2'}>В работе:</h3>
              <ul className={`${style.listNumberOrders}`}>
                <li className='text text_type_digits-default'>034542</li>
              </ul>
            </div>
          </div>
          <div className={style.ordersContainer}>
            <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
            <p className="text text_type_digits-large">28 752</p>
          </div>
          <div className={style.ordersContainer}>
            <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
            <p className="text text_type_digits-large">138</p>
          </div>
        </div>
  );
};
