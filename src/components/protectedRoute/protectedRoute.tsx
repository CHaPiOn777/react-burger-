

import React, {FC, ReactNode} from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useSelector } from '../../utils/hooks/useForm';
import { LoaderAuth } from '../../utils/Loader/Loader';
import { getCookie } from '../../utils/utils';

export type TProtectedRoute = {
	children: ReactNode;
  path: string;
	exact?: boolean;
};

export const ProtectedRoute: FC<TProtectedRoute> = ({ children, ...rest }) => {
  const cookie = getCookie('token');
  const location = useLocation();
  const loader = useSelector(store => store.authReducer.loader);

  return (
    <LoaderAuth loader={loader}>
      <Route
        {...rest}
        render={() =>
          cookie ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    </LoaderAuth>
  );
} 