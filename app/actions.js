export function findAll(data) {
  return {
    type: 'RECIPE@FIND_ALL',
    data,
  };
}

export function createRecipe(data) {
  return {
    type: 'RECIPE@CREATE',
    data: { ...data, id: new Date() }
  };
}

export function removeRecipe(id) {
  return {
    type: 'RECIPE@REMOVE',
    id,
  };
}
