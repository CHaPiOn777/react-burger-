import React from 'react';
import ReactDOM from 'react-dom';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import stylesModalDetails from './Modal.module.css';
import ModalOverlay from './ModalOverlay/ModalOverlay';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Loader, { LoaderIngredients } from '../utils/Loader/Loader';
import { useHistory } from 'react-router-dom';
const modalRoot = document.querySelector('#modal');

const Modal = ({ active, setActive, children }) => {
  const load = useSelector(store => store.orderDetailsReduser.loader);
  const history = useHistory();
  const homePage = () => { history.push('/') }

  React.useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setActive(false);
        homePage();
      }
    }
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return ReactDOM.createPortal(
    <>
      {load ?
        (<>
          <LoaderIngredients />
          <ModalOverlay active={active} setActive={setActive} closePopup={() => { }}></ModalOverlay>
        </>
        )
        : (
          <>
            <div className={active ? `${stylesModalDetails.container} ${stylesModalDetails.active}` : `${stylesModalDetails.container}`}>
              <button className={`${stylesModalDetails.close} mt-7 mr-5`} onClick={() => {homePage(); setActive(false)}}>
                <CloseIcon type="primary" />
              </button>
              {children}
            </div>
            <ModalOverlay active={active} setActive={setActive} closePopup={() => {homePage(); setActive(false)}}></ModalOverlay>
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

