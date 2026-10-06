/**
 * @description Capitalizes first letter of a string
 * @param {string} string - string to capitalize first letter with
 * @returns {string}
 */
const capFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

//https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality
/**
 * Compare two sets
 * @param {Set} a
 * @param {Set} b
 * @returns {boolean}
 */
const areSetsEqual = (a, b) =>
  a.size === b.size && [...a].every((value) => b.has(value))

/**
 * Compare two arrays
 * @param {Array<any>} a
 * @param {Array<any>} b
 * @returns
 */
const areArraysEqual = (a, b) => {
  if (a == null || b == null) return false
  if (a === b) return true
  if (a.length !== b.length) return false

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

/**
 * Random item generator
 * @param {Array<any>} arr
 * @returns {Generator}
 */
const randomItemGenerator = function* (arr) {
  while (true) {
    let randIndex = Math.floor(Math.random() * arr.length)
    yield arr[randIndex]
  }
}

/**
 * Sequential item generator (increments items in array)
 * @param {Array<any>} arr
 * @returns {Generator}
 */
const sequentialItemGenerator = function* (arr) {
  let i = -1
  while (true) {
    yield arr[++i % arr.length]
  }
}
export {
  capFirstLetter,
  areSetsEqual,
  areArraysEqual,
  randomItemGenerator,
  sequentialItemGenerator
}
