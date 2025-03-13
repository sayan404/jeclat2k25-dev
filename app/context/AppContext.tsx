import { createContext, useContext, useReducer, ReactNode } from "react";

interface AppState {
  isLoading: boolean;
  theme: "light" | "dark";
}

type Action =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_THEME"; payload: "light" | "dark" };

const initialState: AppState = {
  isLoading: false,
  theme: "dark",
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
