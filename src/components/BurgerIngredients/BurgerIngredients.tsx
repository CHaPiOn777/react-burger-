import React, { useMemo, useEffect, useRef, FC } from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesIngredients from './BurgerIngredients.module.css';
import CardIngredients from './CardIngredients/CardIngredients';
import { TIngredient } from '../../services/types/types';
import { useSelector } from '../../utils/hooks/useForm';

type TRef = {
	current: any;
}

const BurgerIngredients: FC = () => {
  const [current, setCurrent] = React.useState<string>('one');
  const state = useSelector(store => store.listIgredients.feed);

  const bun = useMemo(() => state.filter((item: TIngredient) => item.type === 'bun'), [state]);
  const sauce = useMemo(() => state.filter((item: TIngredient) => item.type === 'sauce'), [state]);
  const main = useMemo(() => state.filter((item: TIngredient) => item.type === 'main'), [state]);

  const tabRef = useRef<any>(current);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const scrollMenu = (bunRef:TRef, sauceRef:TRef ) => {
    if (bunRef.current.getBoundingClientRect().top >= 0) {
      setCurrent('one')
    } else if (sauceRef.current.getBoundingClientRect().top >= 0) {
      setCurrent('two')
    } else {
      setCurrent('three')
    }
  }

  useEffect(() => {
    tabRef.current.addEventListener('scroll', scrollMenu)
  }, [])

  const buttonHandler = (ref:TRef) => {
    ref.current.scrollIntoView();
  }

  return (
    <section className={stylesIngredients.section}>
      <h1 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>
      <nav>
        <ul className={stylesIngredients.list} >
          <li>
            <Tab value="one" active={current === 'one'} onClick={() => { buttonHandler(bunRef) }}>
              Булки
            </Tab>
          </li>
          <li>
            <Tab value="two" active={current === 'two'} onClick={() => { buttonHandler(sauceRef) }}>
              Соусы
            </Tab>
          </li>
          <li>
            <Tab value="three" active={current === 'three'} onClick={() => { buttonHandler(mainRef) }}>
              Начинки
            </Tab>
          </li>
        </ul>
      </nav>
      <div className={stylesIngredients.cards} ref={tabRef} >
        <h2 className={`mt-10 mb-6 text text_type_main-medium`} ref={bunRef}>Булки</h2>
        <div className={`${`${stylesIngredients.cardsItem} pl-4 pr-2`} pl-4 pr-2`} >
          {bun.map((card: TIngredient) => {
            return (
              <CardIngredients
                card={card}
                key={card._id}
              />
            )
          })}
        </div>
        <h2 className={`mt-10 mb-6 text text_type_main-medium`} ref={sauceRef}>Соусы</h2>
        <div className={`${stylesIngredients.cardsItem} pl-4 pr-2`}>
          {sauce.map((card: TIngredient) => {
            return (
              <CardIngredients
                card={card}
                key={card._id}
              />
            )
          }
          )}
        </div>
        <h2 className={`mt-10 mb-6 text text_type_main-medium`} ref={mainRef}>Начинки</h2>
        <div className={`${stylesIngredients.cardsItem} pl-4 pr-2`}>
          {main.map((card: TIngredient) => {
            return (
              <CardIngredients
                card={card}
                key={card._id}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default React.memo(BurgerIngredients);