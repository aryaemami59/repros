import eslintConfigESLintDefault, * as eslintConfigESLint from 'eslint-config-eslint'
import eslintConfigESLintBaseDefault, * as eslintConfigESLintBase from 'eslint-config-eslint/base'
import eslintConfigESLintCJSDefault, * as eslintConfigESLintCJS from 'eslint-config-eslint/cjs'
import * as eslintConfigESLintFormatting from 'eslint-config-eslint/formatting'
import eslintConfigESLintFormattingDefault, {
  rules,
} from 'eslint-config-eslint/formatting'
import * as assert from 'node:assert'
import { describe, it } from 'node:test'

describe('named exports should work in an ESM file', () => {
  it('eslint-config-eslint', () => {
    assert.strictEqual(typeof eslintConfigESLint, 'object')

    assert.ok(!Array.isArray(eslintConfigESLint))

    assert.strictEqual(typeof eslintConfigESLintDefault, 'object')

    assert.ok(Array.isArray(eslintConfigESLintDefault))
  })

  it('eslint-config-eslint/base', () => {
    assert.strictEqual(typeof eslintConfigESLintBase, 'object')

    assert.ok(!Array.isArray(eslintConfigESLintBase))

    assert.strictEqual(typeof eslintConfigESLintBaseDefault, 'object')

    assert.ok(Array.isArray(eslintConfigESLintBaseDefault))
  })

  it('eslint-config-eslint/cjs', () => {
    assert.strictEqual(typeof eslintConfigESLintCJS, 'object')

    assert.ok(!Array.isArray(eslintConfigESLintCJS))

    assert.strictEqual(typeof eslintConfigESLintCJSDefault, 'object')

    assert.ok(Array.isArray(eslintConfigESLintCJSDefault))
  })

  it('eslint-config-eslint/formatting', () => {
    assert.strictEqual(typeof eslintConfigESLintFormatting, 'object')

    assert.ok(!Array.isArray(eslintConfigESLintFormatting))

    assert.strictEqual(typeof eslintConfigESLintFormattingDefault, 'object')

    assert.ok(!Array.isArray(eslintConfigESLintFormattingDefault))

    assert.strictEqual(typeof eslintConfigESLintFormatting.rules, 'object')

    assert.strictEqual(typeof eslintConfigESLintFormattingDefault, 'object')

    assert.strictEqual(
      typeof eslintConfigESLintFormattingDefault.rules,
      'object',
    )

    assert.strictEqual(typeof rules, 'object')
  })
})
