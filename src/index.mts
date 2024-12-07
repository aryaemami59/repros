import eslintConfigESLintDefault, * as eslintConfigESLint from 'eslint-config-eslint'
import eslintConfigESLintBaseDefault, * as eslintConfigESLintBase from 'eslint-config-eslint/base'
import eslintConfigESLintCJSDefault, * as eslintConfigESLintCJS from 'eslint-config-eslint/cjs'
import eslintConfigESLintFormattingDefault, * as eslintConfigESLintFormatting from 'eslint-config-eslint/formatting'
// Should fail
export { rules } from 'eslint-config-eslint/formatting'
export {
  eslintConfigESLint,
  eslintConfigESLintBase,
  eslintConfigESLintBaseDefault,
  eslintConfigESLintCJS,
  eslintConfigESLintCJSDefault,
  eslintConfigESLintDefault,
  eslintConfigESLintFormatting,
  eslintConfigESLintFormattingDefault,
}

// export import eslintConfigESLint = require('eslint-config-eslint')
// export import eslintConfigESLintBase = require('eslint-config-eslint/base')
// export import eslintConfigESLintCJS = require('eslint-config-eslint/cjs')
// export import eslintConfigESLintFormatting = require('eslint-config-eslint/formatting')
// export const { rules } = eslintConfigESLintFormatting
