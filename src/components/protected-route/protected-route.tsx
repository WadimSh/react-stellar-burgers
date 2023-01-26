import { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAppSelector } from "../../hooks/hooks";

const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuth } = useAppSelector((store) => store.auth);
  
  return (
    <Route
      {...rest}
      render={({ location }): any => (isAuth
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
