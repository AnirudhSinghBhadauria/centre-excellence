interface InitState {
  sidebarState: boolean;
}

type Action =
  | { type: "SIDE-STATE"; payload: boolean }

export const INITIAL_STATE: InitState = {
  sidebarState: false,
};

export const appReducer = (state: InitState, action: Action) => {
  switch (action.type) {
    case "SIDE-STATE":
      return {
        ...state,
        sidebarState: action.payload,
      };
    default:
      return state;
  }
};
