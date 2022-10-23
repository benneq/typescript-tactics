import { join } from './react';

describe('react', () => {
  it('join value', () => {
    const node1 = '1';
    const node2 = '2';
    const separator = 's';

    expect(join([], separator)).toEqual([]);
    expect(join([node1], separator)).toEqual([[false, node1]]);
    expect(join([node1, node2], separator)).toEqual([
      [false, node1],
      [separator, node2],
    ]);
  });

  it('join supplier', () => {
    const node1 = '1';
    const node2 = '2';

    expect(join([], (index) => '' + index)).toEqual([]);
    expect(join([node1], (index) => '' + index)).toEqual([[false, node1]]);
    expect(join([node1, node2], (index) => '' + index)).toEqual([
      [false, node1],
      ['1', node2],
    ]);
  });
});

export {};
