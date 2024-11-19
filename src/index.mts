import * as eslintConfigESLint from 'eslint-config-eslint'
import * as eslintConfigESLintBase from 'eslint-config-eslint/base'
import * as eslintConfigESLintCJS from 'eslint-config-eslint/cjs'
import {} from 'eslint-config-eslint'
import {} from 'eslint-config-eslint/base'
import {} from 'eslint-config-eslint/cjs'
import eslintConfigESLintFormatting from 'eslint-config-eslint/formatting'
// Should fail
export { rules } from 'eslint-config-eslint/formatting'
// export * as eslintConfigESLintFormatting from 'eslint-config-eslint/formatting'
export {
  eslintConfigESLint,
  eslintConfigESLintBase,
  eslintConfigESLintCJS,
  eslintConfigESLintFormatting,
}
