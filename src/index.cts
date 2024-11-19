import eslintConfigESLint = require('eslint-config-eslint')
import eslintConfigESLintBase = require('eslint-config-eslint/base')
import eslintConfigESLintCJS = require('eslint-config-eslint/cjs')
import eslintConfigESLintFormatting = require('eslint-config-eslint/formatting')
const { rules } = eslintConfigESLintFormatting
// export * as eslintConfigESLintFormatting from 'eslint-config-eslint/formatting'
const allExports = {
  rules,
  eslintConfigESLint,
  eslintConfigESLintBase,
  eslintConfigESLintCJS,
  eslintConfigESLintFormatting,
}

export = allExports
