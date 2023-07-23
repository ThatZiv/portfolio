import * as utils from '../utils'

describe('Tests utilities', () => {
  test('Capitalize first letter', () => {
    expect(utils.capFirstLetter('zua')).toBe('Zua')
  })
  test('Set comparison', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([1, 2, 3])
    expect(utils.areSetsEqual(a, b)).toBeTruthy()
    const c = new Set([4, 5, 6])
    const d = new Set([7, 8, 9])
    expect(utils.areSetsEqual(c, d)).toBeFalsy()
  })
  test('Array comparison', () => {
    const a = [1, 2, 4]
    const b = [1, 2, 3]
    expect(utils.areArraysEqual(a, b)).toBeFalsy()
    const c = [1, 2, 3]
    expect(utils.areArraysEqual(b, c)).toBeTruthy()
  })
  test('Random item generator (replication)', () => {
    const items = ['first', 'second', 'third', 'fourth']
    const itemGen = utils.randomItemGenerator(items)
    let replicated = []
    while (replicated.length < items.length) {
      const newItem = itemGen.next().value
      if (!replicated.includes(newItem)) {
        replicated.push(newItem)
      }
    }
    expect(utils.areArraysEqual(items.sort(), replicated.sort())).toBeTruthy()
  })
  test('Sequential item generator (replication)', () => {
    const items = ['first', 'second', 'third']
    const itemsGen = utils.sequentialItemGenerator(items)
    let replicated = []
    for (let i = 0; i < items.length; i++) {
      replicated.push(itemsGen.next().value)
    }
    expect(utils.areArraysEqual(items, replicated)).toBeTruthy()
  })
})
