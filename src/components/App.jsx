
// import { useAuth } from 'hooks/useAuth';
import {lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useAuth } from '../hooks/useAuth';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';


const HomePage = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const Profile = lazy(() => import('../pages/Account/Account'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return isRefreshing ?
    (
    <b>Refreshing user...</b>
    ) : 
      (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
          <Route path='/contacts' element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          } />
          <Route path='/register' element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          } />
          <Route path='/login' element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          } />
          <Route path='/account' element={
            <PrivateRoute redirectTo="/login" component={<Profile />} />
          } />

        </Route>
      </Routes>
    )
}


