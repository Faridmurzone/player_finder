import {dateToAge} from '../utils'
describe('Test utils functions', () => {
  // Test dateToAge utils
  var date = new Date();
  var y = date.getFullYear()
  var m = date.getMonth()
  var d = date.getDate()
  var date = `${y}-${m}-${d}`
  test('Test function that convert date to age', () => {
    expect(dateToAge(date)).toEqual(0)
  })
})
