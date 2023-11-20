import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const Protectedroute = ({ auth, component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        element={
          auth ? (
            <Component />
          ) : (
            <Navigate to={{ pathname: '/', state: { from: rest.location } }} />
          )
        }
      />
    </div>
  );
};

export default Protectedroute;
