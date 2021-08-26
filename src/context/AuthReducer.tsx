import { AuthState } from "./AuthContext";

type AuthAction =
  | { type: "signIn" }
  | { type: "singOut" }
  | { type: "changeFavIcon"; payload: string }
  | { type: "changeUsername"; payload: string };
export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "signIn":
      return {
        ...state,
        estaLogueado: true,
        username: "no-username-yet",
      };
    case 'singOut':
      return {
        ...state,
        estaLogueado: false,
        username: undefined,
        iconoFavorito: undefined
      };
    case "changeFavIcon":
      return {
        ...state,
        iconoFavorito: action.payload,
      };
    case "changeUsername":
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
