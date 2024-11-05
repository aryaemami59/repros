import { configs } from '@eslint/js'
import assert from 'node:assert'
import { it } from 'node:test'

it('named exports should work in an ESM file', () => {
  // Named exports are not resolved
  assert.strictEqual(typeof configs, 'object')
})
