import * as eslintConfigESLint from 'eslint-config-eslint'
import * as eslintConfigESLintBase from 'eslint-config-eslint/base'
import * as eslintConfigESLintCJS from 'eslint-config-eslint/cjs'
import eslintConfigESLintFormattingDefault, * as eslintConfigESLintFormatting from 'eslint-config-eslint/formatting'
console.log(Object.keys(eslintConfigESLintFormatting))
console.log(Object.keys(eslintConfigESLintFormatting.default))
// console.log(eslintConfigESLintFormatting)
// console.log(eslintConfigESLintFormattingDefault)
// import { rules } from 'eslint-config-eslint/formatting'
// console.log(rules)
import * as assert from 'node:assert'
import { it } from 'node:test'

// console.log(
//   [...eslintConfigESLint.default, eslintConfigESLintFormatting.rules].length,
// )
// console.log(
//   [...eslintConfigESLint.default, eslintConfigESLintFormatting].length,
// )

it('named exports should work in an ESM file', () => {
  // Named exports are not resolved
  assert.strictEqual(typeof eslintConfigESLint, 'object')
  assert.strictEqual(typeof eslintConfigESLintBase, 'object')
  assert.strictEqual(typeof eslintConfigESLintCJS, 'object')
  assert.strictEqual(typeof eslintConfigESLintFormatting, 'object')
  assert.strictEqual(typeof eslintConfigESLintFormatting.rules, 'object')
  assert.strictEqual(typeof eslintConfigESLintFormattingDefault, 'object')
  assert.strictEqual(typeof eslintConfigESLintFormattingDefault.rules, 'object')
  console.log(Object.keys(eslintConfigESLintFormattingDefault))
  console.log(Object.keys(eslintConfigESLintFormattingDefault.rules))
  console.log(Object.keys(eslintConfigESLintFormatting))
  console.log(Object.keys(eslintConfigESLintFormatting.default))
  // console.log(Object.keys(eslintConfigESLintFormatting.default.rules))
  // Should fail.
  // console.log(Object.keys(eslintConfigESLintFormatting.rules))
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
