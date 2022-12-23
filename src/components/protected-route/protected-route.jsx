import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children, ...rest }) {
  const { isAuth } = useSelector((store) => store.auth);

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

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;