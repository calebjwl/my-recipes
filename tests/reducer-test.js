import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('add recipe', (assert) => {
    const emptyState = { recipes: [] };
    const oldState = { recipes: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const actionTwo = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'Nic', lastName: 'Cage' }] };
    const actionThree = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'Johnny', lastName: 'Depp' }] };

    assert.deepEqual(reducer(emptyState, actionOne), { recipes: [{ firstName: 'John', lastName: 'Cena' }] });
    assert.deepEqual(reducer(oldState, actionOne), { recipes: actionOne.data });
    assert.deepEqual(reducer(oldState, actionTwo), { recipes: actionTwo.data });
    assert.deepEqual(reducer(emptyState, actionThree), { recipes: actionThree.data });
    assert.deepEqual(reducer(oldState, actionThree), { recipes: actionThree.data });
  });

  test('remove the only recipe', (assert) => {
    const oneState = { recipes: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }] };
    const action = { type: 'CONTACT@REMOVE', id: 1 };

    assert.deepEqual(reducer(oneState, action), { recipes: [] });
  });

  test('remove one recipe out of several', (assert) => {
    const multipleState = { recipes: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }, { firstName: 'Nic', lastName: 'Cage', id: 2 }] };
    const action = { type: 'CONTACT@REMOVE', id: 1 };

    assert.deepEqual(reducer(multipleState, action), { recipes: [{ firstName: 'Nic', lastName: 'Cage', id: 2 }] });
  });

  test('remove a recipe without a matching id', (assert) => {
    const multipleState = { recipes: [{ firstName: 'Angelina', lastName: 'Jolie', id: 1 }, { firstName: 'Nic', lastName: 'Cage', id: 2 }] };
    const action = { type: 'CONTACT@REMOVE', id: 3 };

    assert.deepEqual(reducer(multipleState, action), multipleState);
  });
});
