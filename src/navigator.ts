export const navigate = (start: [number, number]) => {
  if (!start || start.length !== 2)
    throw new Error('Missing start point');
};
