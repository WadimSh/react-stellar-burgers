import { FC, useEffect } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { getUser } from '../../services/actions/auth-actions';
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
      dispatch(getUser())
  }, []);

  const { isAuth } = useAppSelector((store) => store.auth);
  console.log(isAuth)
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
