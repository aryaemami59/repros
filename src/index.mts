import * as eslintConfigESLint from 'eslint-config-eslint'
import * as eslintConfigESLintBase from 'eslint-config-eslint/base'
import * as eslintConfigESLintCJS from 'eslint-config-eslint/cjs'
import eslintConfigESLintDefault from 'eslint-config-eslint'
import eslintConfigESLintBaseDefault from 'eslint-config-eslint/base'
import eslintConfigESLintCJSDefault from 'eslint-config-eslint/cjs'
import {} from 'eslint-config-eslint'
import {} from 'eslint-config-eslint/base'
import {} from 'eslint-config-eslint/cjs'
import eslintConfigESLintFormattingDefault from 'eslint-config-eslint/formatting'
// Should fail
export { rules } from 'eslint-config-eslint/formatting'
import * as eslintConfigESLintFormatting from 'eslint-config-eslint/formatting'
export {
  eslintConfigESLint,
  eslintConfigESLintBase,
  eslintConfigESLintCJS,
  eslintConfigESLintFormatting,
  eslintConfigESLintFormattingDefault,
  eslintConfigESLintDefault,
  eslintConfigESLintBaseDefault,
  eslintConfigESLintCJSDefault,
}
