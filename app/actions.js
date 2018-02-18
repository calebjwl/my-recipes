export function findAll(data) {
  return {
    type: 'CONTACT@FIND_ALL',
    data,
  };
}

export function createContact(data) {
  return {
    type: 'CONTACT@CREATE',
    data: { ...data, id: new Date() }
  };
}

export function removeContact(id) {
  return {
    type: 'CONTACT@REMOVE',
    id,
  };
}
