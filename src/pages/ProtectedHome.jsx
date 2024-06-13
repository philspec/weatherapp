import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedHome = ({ component: Component }) => {
  const authValid = useSelector((state) => state.auth);

  if (!authValid) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedHome;
