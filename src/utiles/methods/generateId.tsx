export const generateId = (value: string): string => {
  return `${value}_${new Date()}`;
};