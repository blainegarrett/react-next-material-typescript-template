import add from '~/utils/add';

describe('adding two numbers should', () => {
  test('return expected when both args are non 0', () => {
    expect(add(1, 2)).toEqual(3);
  });
  test('return 0 when both args are 0', () => {
    expect(add(0, 0)).toEqual(0);
  });
  test('return expected when both args trigger floating point error', () => {
    expect(add(0.1, 0.2)).toEqual(0.30000000000000004);
  });
});
