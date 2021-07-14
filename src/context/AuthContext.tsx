//Definir como luce, que informacion tendre aqui

import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

//Lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  singIn: () => void;
  singOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changerUsername: (username: string) => void;
}

//Crear el context
export const AuthContext = createContext({} as AuthContextProps);

//Componenten provedor del estado HOIC
// export const AuthProvider = ({children}: {children: JSX.Element[]}) => {
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const singIn = () => {
    dispatch({
      type: 'signIn',
    });
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({
      type: 'changeFavIcon',
      payload: iconName,
    });
  };

  const singOut = () => {
    dispatch({
      type: 'singOut',
    });
  };

  const changerUsername = (username: string) => {
    dispatch({
      type: 'changeUsername',
      payload: username,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        singIn,
        changeFavoriteIcon,
        singOut,
        changerUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
