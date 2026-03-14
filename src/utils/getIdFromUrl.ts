export const getIdFromUrl = (url: string): number | undefined => {
  const parts = url.split('/').filter(Boolean); // remove empty parts
  const id = parts[parts.length - 1];

  const parsed = Number(id);
  return isNaN(parsed) ? undefined : parsed;
};
