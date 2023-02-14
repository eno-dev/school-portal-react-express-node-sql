import { useSelector, useDispatch } from 'react-redux';
import { toggleOn, toggleOff } from '../../features/toggle/toggleSlice';

export default function Toggle() {
  const toggle = useSelector(state => state.toggle.active);
  const dispatch = useDispatch();

  function toggleSidebar() {
    if (!toggle) {
      dispatch(toggleOn());
    } else {
      dispatch(toggleOff());
    }
  }

  return (
    <button className="menu-toggle" onClick={toggleSidebar}>
      <i className="bi bi-list toggle"></i>
    </button>
  );
}
