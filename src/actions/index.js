export const generalAction = type => () => ({
  type
});

export const generalParamsAction = type => params => ({
  type,
  payload: params
});

export const switchThemeAction = (type, params) => {
  return {
    type,
    payload: params === "white" ? "black" : "white"
  };
};
