import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedHome = ({ component: Component }) => {
  const {auth} = useSelector((state) => state.auth);

  if (!auth) {
    return <Navigate to="/login" />;
  }
  else{
    return <Component />
  }
  ;
};

export default ProtectedHome;
