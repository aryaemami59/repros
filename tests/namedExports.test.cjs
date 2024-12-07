const eslintConfigESLint = require('eslint-config-eslint')
const eslintConfigESLintBase = require('eslint-config-eslint/base')
const eslintConfigESLintCJS = require('eslint-config-eslint/cjs')
const eslintConfigESLintFormatting = require('eslint-config-eslint/formatting')
const { rules } = require('eslint-config-eslint/formatting')
const assert = require('node:assert')
const { it, describe } = require('node:test')

describe('named exports should work in an CJS file', () => {
  it('eslint-config-eslint', () => {
    assert.strictEqual(typeof eslintConfigESLint, 'object')

    assert.ok(Array.isArray(eslintConfigESLint))

    assert.ok(!('default' in eslintConfigESLint))
  })

  it('eslint-config-eslint/base', () => {
    assert.strictEqual(typeof eslintConfigESLintBase, 'object')

    assert.ok(Array.isArray(eslintConfigESLintBase))

    assert.ok(!('default' in eslintConfigESLintBase))
  })

  it('eslint-config-eslint/cjs', () => {
    assert.strictEqual(typeof eslintConfigESLintCJS, 'object')

    assert.ok(Array.isArray(eslintConfigESLintCJS))

    assert.ok(!('default' in eslintConfigESLintCJS))
  })

  it('eslint-config-eslint/formatting', () => {
    assert.strictEqual(typeof eslintConfigESLintFormatting, 'object')

    assert.ok(!Array.isArray(eslintConfigESLintFormatting))

    assert.strictEqual(typeof eslintConfigESLintFormatting.rules, 'object')

    assert.ok(!('default' in eslintConfigESLintFormatting))

    assert.strictEqual(typeof rules, 'object')
  })
})
