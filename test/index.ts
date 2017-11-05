import * as assert from 'assert'
import Skeleton from '../src/skeleton'

describe('Skeleton', () => {
  it('say message', () => {
    const msg = 'Hello'
    const expected = `☠  ${msg} ☠`
    assert(Skeleton.say(msg) === expected)
  })
})
