import React, { createContext } from "react";
import { useReducer } from "react";
import { authReducer } from "./AuthReducer";

//Definir como luce, que info tendre aqui
export interface AuthState {
  estaLogueado: boolean;
  username?: string;
  iconoFavorito?: string;
}

//Estado inicial
export const initialAuthState: AuthState = {
  estaLogueado: false,
  username: undefined,
  iconoFavorito: undefined,
};

//Se usara para decir como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUsername: (userName: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//componente proveedor del estado
export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);
  const signIn = () => {
    dispatch({ type: "signIn" });
  };
  const changeFavoriteIcon = (iconName: string) => {
    dispatch({ type: "changeFavIcon", payload: iconName });
  };
  const signOut = () => {
    dispatch({ type: 'singOut' });
  }
  const changeUsername = (userName: string) => {
    dispatch({ type: 'changeUsername', payload: userName });
  }
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        signOut,
        changeUsername
      }}>
      {children}
    </AuthContext.Provider>
  );
};
