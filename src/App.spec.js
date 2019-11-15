
//* ==================== Mocking modules =====================
import { sumModule } from './sumModule'

jest.mock('./sumModule.js', () => ({
  sumModule: jest.fn(() => 25)
})); // this executes the function
//* ==================== Mocking modules =====================





//* First example
test('fake test', () => {
  expect(true).toBeTruthy();
})



//* Unit testing -> this is the first case
function sum(a, b){
  return a + b;
}

test('sum function', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
})



//* Integration test -> at the same time we are testing two functions
function total(shipping, subTotal) {
  return "$" + sum(shipping, subTotal);
}

test('total function', () => {
  expect(total(5, 20)).toBe('$25');
})




//* Mocking -> this is the third case, we don't have access to that function
const mockAdd = jest.fn(() => 3);

test('mockAdd', () => {
  expect(mockAdd(1, 2)).toBe(3);
  // Ususally this is used on the way to test is the function was triggered
  expect(mockAdd).toHaveBeenCalledTimes(1);
  // and maybe this down below makes no sense now but sure with API calls
  expect(mockAdd).toHaveBeenCalledWith(1, 2);
})




//* ==================== Mocking modules =====================
//* Int testing -> this is the second case
function totalWithSumModule(shipping, subTotal) {
  return "$" + sumModule(shipping, subTotal);
}

test('totalWithSumModule function', () => {
  expect(totalWithSumModule(5, 20)).toBe('$25');
  //* mocking modules, this has to come later
  expect(sumModule).toHaveBeenCalledTimes(1);

  // we can retriger the implementation to test again with values adjusted
  sumModule.mockImplementation(() => 30);
  expect(totalWithSumModule(5, 25)).toBe('$30');
  expect(sumModule).toHaveBeenCalledTimes(2);
})


