import React, {useContext} from 'react';
import AuthContext from '../contexts/AuthContext'; // Import AuthContext
import LoginScreen from '../screens/LoginScreen';

const AuthGuard = ({component: Component, ...props}) => {
  // const {isLoggedIn} = useContext(AuthContext);

  // if (!isLoggedIn) {
  //   return <LoginScreen />;
  // }

  return <Component {...props} />;
};

export default AuthGuard;
