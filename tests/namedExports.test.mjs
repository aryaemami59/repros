import {
  FileEnumerator,
  FlatESLint,
  LegacyESLint,
  builtinRules,
  shouldUseFlatConfig,
} from 'eslint/use-at-your-own-risk'
import assert from 'node:assert'
import { it } from 'node:test'

it('named exports should work in an ESM file', () => {
  // `builtinRules` is the only named export that successfully resolves
  assert.strictEqual(typeof builtinRules, 'object')

  // The other named exports are not resolved
  assert.strictEqual(typeof FileEnumerator, 'object')
  assert.strictEqual(typeof FlatESLint, 'object')
  assert.strictEqual(typeof LegacyESLint, 'object')
  assert.strictEqual(typeof shouldUseFlatConfig, 'function')
})
