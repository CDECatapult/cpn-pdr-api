const test = require('ava')
const { sha384 } = require('../src/utils')

test('sha384', (t) => {
  t.is(
    sha384('🦄'),
    'a9d4dfb503394bd9701d60eb5fb1d7fb800580b43d874165103b16d311fb5c97545cb89f06c31f30e219f5b603e834ca'
  )
  t.is(
    sha384('aeee'),
    '2d26ee932273f4d7e8410a3555fb01284089bbe289ceb74c1b7f94d7945beacc941aaf19612f30bd16de917a54040a8b'
  )
  t.is(
    sha384(''),
    '38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b'
  )
})
