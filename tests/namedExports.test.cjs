const eslintConfigESLint = require('eslint-config-eslint')
const eslintConfigESLintBase = require('eslint-config-eslint/base')
const eslintConfigESLintCJS = require('eslint-config-eslint/cjs')
const eslintConfigESLintFormatting = require('eslint-config-eslint/formatting')
const eslintConfigESLintFormattingDefault = require('eslint-config-eslint/formatting')
// console.log(eslintConfigESLintFormatting)
// import { rules } from 'eslint-config-eslint/formatting'
// console.log(rules)
const assert = require('node:assert')
const { it } = require('node:test')

// console.log(
//   [...eslintConfigESLint.default, eslintConfigESLintFormatting.rules].length,
// )
// console.log(
//   [...eslintConfigESLint.default, eslintConfigESLintFormatting].length,
// )

it('named exports should not work in a CJS file', () => {
  // Named exports are not resolved
  assert.strictEqual(typeof eslintConfigESLint, 'object')
  assert.strictEqual(typeof eslintConfigESLintBase, 'object')
  assert.strictEqual(typeof eslintConfigESLintCJS, 'object')
  assert.strictEqual(typeof eslintConfigESLintFormatting, 'object')
  assert.strictEqual(typeof eslintConfigESLintFormatting.rules, 'object')
  assert.strictEqual(typeof eslintConfigESLintFormattingDefault, 'object')
  // console.log(eslintConfigESLintFormattingDefault)
  console.log(Object.keys(eslintConfigESLintFormatting))
  // console.log(Object.keys(eslintConfigESLintFormatting.rules))
  // These 2 should fail.
  // console.log(Object.keys(eslintConfigESLintFormatting.default))
  // console.log(Object.keys(eslintConfigESLintFormatting.default.rules))
  // console.log(Object.keys(eslintConfigESLintFormatting.rules))
  // assert.deepStrictEqual(eslintConfigESLintFormatting.default.rules, eslintConfigESLintFormatting.rules)
  // assert.deepStrictEqual(
  //   [...eslintConfigESLint.default, eslintConfigESLintFormatting.default.rules],
  //   [...eslintConfigESLint.default, eslintConfigESLintFormatting.default],
  // )
  // console.log(eslintConfigESLintFormatting)
  // console.log(Object.keys(eslintConfigESLintFormatting.default))
  // console.log(Object.keys(eslintConfigESLint))
  // console.log(Object.keys(eslintConfigESLintBase))
  // console.log(Object.keys(eslintConfigESLintFormattingDefault))
  // console.log(eslintConfigESLintFormatting.rules)
  // console.log(eslintConfigESLintFormattingDefault)
  // assert.strictEqual(typeof rules, 'object')
})
