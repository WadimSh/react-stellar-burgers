import { FC, ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface IProtectedRoute {
  path: string;
  children?: ReactNode;
};

const ProtectedRoute: FC<IProtectedRoute> = ({ children, ...rest }) => {
  const { isAuth } = useSelector((store: any) => store.auth);

  return (
    <Route
      {...rest}
      render={({ location }) => (
        isAuth
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
