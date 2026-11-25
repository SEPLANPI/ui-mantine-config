// Carrega o módulo como os bundlers fazem (ESM) e monta o tema completo
// com a versão instalada do @mantine/core. Falha se algum import não existir
// nessa versão ou se o resolver de cores quebrar.
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { DEFAULT_THEME, mergeMantineTheme } from "@mantine/core"
import { theme } from "../src/index.js"

const versao = JSON.parse(
  readFileSync(new URL("../node_modules/@mantine/core/package.json", import.meta.url)),
).version
const completo = mergeMantineTheme(DEFAULT_THEME, theme)

assert.equal(completo.primaryColor, "govBlue")
assert.equal(completo.colors.govBlue.length, 10)

for (const variant of ["secondary", "ghost", "filled", "light", "outline"]) {
  const cores = completo.variantColorResolver({ variant, color: "govBlue", theme: completo })
  for (const campo of ["background", "hover", "color", "border"]) {
    assert.ok(cores[campo], `variant ${variant} sem ${campo}`)
  }
}

console.log(`@ui/mantine-config ok com @mantine/core ${versao}`)
