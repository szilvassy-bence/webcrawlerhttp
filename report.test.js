const { sortPages } = require('./report.js')

test('sort pages', () => {
  const input = {
    'https://wagslane.dev/path': 1,
    'https://wagslane.dev': 3
  }
  const actual = sortPages(input);
  const expected = [
    ['https://wagslane.dev', 3],
    ['https://wagslane.dev/path', 1]
  ];
  expect(actual).toEqual(expected)
})

test('sort pages', () => {
  const input = {
    'https://wagslane.dev/path1': 1,
    'https://wagslane.dev': 3,
    'https://wagslane.dev/path2': 4,
    'https://wagslane.dev/path4': 6,
    'https://wagslane.dev/path3': 12,
    'https://wagslane.dev/path5': 1
  }
  const actual = sortPages(input);
  const expected = [
    ['https://wagslane.dev/path3', 12],
    ['https://wagslane.dev/path4', 6],
    ['https://wagslane.dev/path2', 4],
    ['https://wagslane.dev', 3],
    ['https://wagslane.dev/path1', 1],
    ['https://wagslane.dev/path5', 1]
  ];
  expect(actual).toEqual(expected)
})