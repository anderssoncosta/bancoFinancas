
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {
 
  const { signed } = useContext(AuthContext)

  return (
    signed ? <AppRoutes/> : <AuthRoutes/>
  );
}

export default Routes