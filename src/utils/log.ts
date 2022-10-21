export const warn = (msg: string, condition = true) => {
  if (condition) {
    console.warn(msg);
  }
};
