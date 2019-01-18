const minus = require('./minus');
// 2 - 1 เท่ากับ 1
test('2 - 1 เท่ากับ 1', ()=> {
  expect(minus(2,1)).toBe(1);
});

// 5 - 1 เท่ากับ 4

test('5 - 1 เท่ากับ 4', ()=> {
  expect(minus(5,1)).toBe(4);
});

// 3 - 3 เท่ากับ 0

test('3 - 3 เท่ากับ 0', ()=> {
  expect(minus(3,3)).toBe(0);
});


test('2 - 2 เท่ากับ 0',()=> {
  expect(minus(2,2)).toBe(0);
});

test('100 - 50 เท่ากับ 50',()=> {
  expect(minus(100,50)).toBe(50);
});
