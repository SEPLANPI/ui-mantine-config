// O tema exportado tem que valer como MantineThemeOverride na versão
// instalada do @mantine/core (a matriz do CI troca entre 7, 8 e 9).
import { createTheme, type MantineThemeOverride } from "@mantine/core"
import { theme } from "../src/index.js"

const override: MantineThemeOverride = theme
createTheme(override)
