export const saveCreditials = (userDetails) => {
  return {
    type: "SAVE_CREDS",
    payload: userDetails,
  };
};
