export const isAuthenticated = (state) => {
  console.log("decodedPayload1", state.auth.auth.email);

  if (state.auth.auth.email) return true;
  return false;
};
