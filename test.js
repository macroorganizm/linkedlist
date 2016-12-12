import LinkedList from './linked-list';
const assert = require('assert');

let list;

describe('Linked List. Base functions.', () => {

  beforeEach(() => {

    list = new LinkedList();
    list.add('1');
    list.add('2');
    list.add('3');
    list.add('4');
    list.add('5');
  });

  it('List length must available', function () {
    assert.equal(list.length, 5);
  });

  it('Check get()', function () {
    assert.equal(list.get(2), '3');
  });

  it('Check toArray function', function () {
    assert.equal(list.toArray().join(), '1,2,3,4,5');
  });

  it('Check remove(0)', function () {
    list.remove(0);
    assert.equal(list.toArray().join(), '2,3,4,5');
  });

  it('Check remove()', function () {
    list.remove(0);
    assert.equal(list.toArray().join(), '2,3,4,5');
  });

  it('Check remove(2)', function () {
    list.remove(2);
    assert.equal(list.toArray().join(), '1,2,4,5');
  });

  it('Check remove(4)', function () {
    list.remove(4);
    assert.equal(list.toArray().join(), '1,2,3,4');
  });

  it('Check add(4, 2)', function () {
    list.add(4, 2);
    assert.equal(list.toArray().join(), '1,2,4,3,4,5');
  });

  it('Check set(4, 2)', function () {
    list.set(4, 2);
    assert.equal(list.toArray().join(), '1,2,3,4,2');
  });
});

describe('Linked List. Overridden (from Array) methods.', () => {

    beforeEach(() => {
      list = new LinkedList();
      list.add('1');
      list.add('2');
      list.add('3');
      list.add('4');
      list.add('5');
    });
  it('Check instance of Array', function () {
    assert.equal(list instanceof Array, true);
  });

  it('Check instance of indexOf', function () {
    assert.equal(list.indexOf('3'), 2);
  });

  it('Check push(6, 7, 8)', function () {
    assert.equal(list.push(6, 7, 8), 8);
    assert.equal(list.toArray().join(), '1,2,3,4,5,6,7,8');
  });

  it('Check pop()', function () {
    assert.equal(list.pop(), '5');
    assert.equal(list.toArray().join(), '1,2,3,4');
  });

  it('Check unshift(a, b, c)', function () {
    assert.equal(list.unshift('a', 'b', 'c'), 8);
    assert.equal(list.toArray().join(), 'a,b,c,1,2,3,4,5');
  });

  it('Check shift()', function () {
    assert.equal(list.shift(), '1');
    assert.equal(list.toArray().join(), '2,3,4,5');
  });

  it('Check forEach', function () {
    list.forEach((item, index) => {
      list.set(index, 'new_' + item)
    });
    assert.equal(list.toArray().join(), 'new_1,new_2,new_3,new_4,new_5');
  });

  it('Check toString', function () {
    assert.equal(list.toString(), '[Linked List]');
  });

  it('Positive check some()', function () {
    assert.equal(list.some((item) =>  item === '2'), true);
  });

  it('Negative check some()', function () {
    assert.equal(list.some((item) =>  item === '6'), false);
  });

  it('Negative check every()', function () {
    assert.equal(list.every((item) =>  item === '2'), false);
  });

  it('Positive check every()', function () {
    assert.equal(list.every((item) =>  item !== '0'), true);
  });

});

describe('Linked List. Working with objects.', () => {

  beforeEach(() => {
    list = new LinkedList();
    list.add({stringProperty: 'String1', numberProperty: 10});
    list.add({stringProperty: 'String2', numberProperty: 20});
    list.add({stringProperty: 'String3', numberProperty: 30});
    list.add({stringProperty: 'String4', numberProperty: 40});
    list.add({stringProperty: 'String5', numberProperty: 50});
  });

  it('Check find', function () {
    let result = list.find((item) => item.numberProperty === 20);
    assert.equal(result.stringProperty, 'String2');

    result = list.find((item, index) => index === 2);
    assert.equal(result.stringProperty, 'String3');
  });

  it('Check findIndex', function () {
    let result = list.findIndex((item) => item.numberProperty === 20);
    assert.equal(result, 1);

    result = list.findIndex((item, index) => index === 2);
    assert.equal(result, 2);
  });

  it('Check findAll', function () {
    const result = list.findAll((item) => item.numberProperty > 20);
    assert.equal(result.length, 3);
  });
});
