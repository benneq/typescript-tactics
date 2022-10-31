export const parseFloat = (str: string): number | undefined => {
  const number = Number.parseFloat(str);

  return Number.isNaN(number) ? undefined : number;
};
