import React from 'react';
import ReactDOM from 'react-dom';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesModalDetails from './Modal.module.css';
import ModalOverlay from './ModalOverlay/ModalOverlay';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_ITEMS } from '../../services/action/constructorAction';
const modalRoot = document.querySelector('#modal');

const Modal = ({ active, setActive, children }) => {
  const load = useSelector(store => store.orderDetailsReduser.loader)
  const dispatch = useDispatch();
  const resetConstructor = () => {
    dispatch({
      type: RESET_ITEMS
    })
  };

  React.useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setActive(false);
        resetConstructor();
      }
    }
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return ReactDOM.createPortal(

    <>
      {load ?
        (<>
          <div className={`${stylesModalDetails.loader}`}></div>
          <ModalOverlay active={active} setActive={setActive} closePopup={() => { setActive(false); resetConstructor() }}></ModalOverlay>
          </>
        )
        : (
          <>
            <div className={active ? `${stylesModalDetails.container} ${stylesModalDetails.active}` : `${stylesModalDetails.container}`}>
              <button className={`${stylesModalDetails.close} mt-7 mr-5`} onClick={() => { setActive(false); resetConstructor() }}>
                <CloseIcon type="primary" />
              </button>
              {children}
            </div>
            <ModalOverlay active={active} setActive={setActive} closePopup={() => { setActive(false); resetConstructor() }}></ModalOverlay>
          </>)}
    </>
    , modalRoot
  )
}

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func
}
export default Modal;

