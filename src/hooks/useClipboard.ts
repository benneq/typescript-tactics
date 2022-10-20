export const readText = (): Promise<string> => {
  return navigator.clipboard.readText();
};

export const writeText = (data: string): Promise<any> => {
  return navigator.clipboard.writeText(data);
};
