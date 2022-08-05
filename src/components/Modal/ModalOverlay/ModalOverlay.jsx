import stylesModalOverlay from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ active, setActive }) => {
  return (
    <div className={active ? `${stylesModalOverlay.popup} ${stylesModalOverlay.active}` : `${stylesModalOverlay.popup}`}
    onClick={() => setActive(false)}>
    </div>)
}

ModalOverlay.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func
}
export default ModalOverlay;