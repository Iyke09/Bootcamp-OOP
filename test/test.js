import assert from 'chai';
import Employee,{ Manager } from '../src/app';

console.log((new Employee('Janitor',null,'f', 1960).speak()));

describe('Manager', () => {
  const mrJohnson = new Manager('Johnson', 'male', 1997);
  it('should return 20 for mrJohnson.age', () => {
    assert.assert.equal(mrJohnson.age, 20);
  });

  it(`should return I'm Mr Johnson, and I'm your your boss for mrJohnson.speak()`, () => {
    assert.assert.equal(mrJohnson.speak(), `I'm Mr Johnson, and I'm your your boss`);
  });

  it(`should return male for mrJohnson.sex`, () => {
    assert.assert.equal(mrJohnson.sex, 'male');
  });
  it('should return object for the instance of the class', () => {
    assert.assert.equal(typeof(mrJohnson),'object');
  });
  it('should be an instance of the Manager class', () => {
    assert.assert.equal(mrJohnson instanceof Manager, true);
  });
});

describe('Employee', () => {
  const mrsJanitor = new Employee('Janitor',null,'f', 1960);
  it('should return 57 for mrsJohnson.age', () => {
    assert.assert.equal(mrsJanitor.age, 57);
  });
  it('should return name as Annonymous if no name is given', () => {
    const mrsJanitor = new Employee(undefined,null,'f', 1960);
    assert.assert.equal(mrsJanitor.name, 'Annonymous');
  });
  it('should return invalid input if name is not string', () => {
    const mrsJanitor = new Employee(25,null,'f', 1960);
    assert.assert.equal(mrsJanitor.err, 'invalid input');
  });

  it(`should return hello my name is Janitor, I'm an employee here for mrsJanitor.speak()`, () => {
    assert.assert.equal(mrsJanitor.speak(), `hello my name is Janitor, I'm an employee here`);
  });

  it(`should return f for mrsJanitor.sex`, () => {
    assert.assert.equal(mrsJanitor.sex, 'f');
  });
});