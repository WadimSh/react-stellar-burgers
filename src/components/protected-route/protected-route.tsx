import { FC, ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAppSelector } from "../../hooks/hooks";

interface IProtectedRoute {
  path: string;
  children?: ReactNode;
};

const ProtectedRoute: FC<IProtectedRoute> = ({ children, ...rest }) => {
  const { isAuth } = useAppSelector((store) => store.auth);
  console.log(isAuth)
  return (
    <Route
      {...rest}
      render={({ location }) => (isAuth
          ? (children)
          : (
            <Redirect to={{
              pathname: '/login',
              state: { from: location },
            }}
            />
          )
      )}
    />
  );
}

export default ProtectedRoute;
