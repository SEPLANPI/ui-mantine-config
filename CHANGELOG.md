# Changelog

Mudanças do `@ui/mantine-config` por versão, da mais recente para a mais antiga. A numeração segue o [versionamento semântico](https://semver.org/lang/pt-BR/).

## [1.3.0] - 2026-11-24

Compatibilidade com Mantine 7, 8 e 9. **Sem mudança visual.**

### Corrigido
- **Carregamento em ESM.** O `index.js` importava `VariantColorsResolver`, que é só um tipo. Em ESM, o módulo falhava com `does not provide an export named 'VariantColorsResolver'`. O webpack do Next 14 só avisava; o Turbopack, padrão no Next 16, trata como erro.
- **`border` nas variantes `secondary` e `ghost`.** O tipo do resolver exige o campo. O valor é o padrão do Mantine (`calc(0.0625rem * var(--mantine-scale)) solid transparent`), o mesmo que o CSS do botão já usava sem ele.

### Alterado
- `peerDependencies`: `@mantine/core ^7.13.1 || ^8.0.0 || ^9.0.0`. O tema não usa nada que tenha mudado entre essas versões.

### Adicionado
- `pnpm check`: confere os tipos (`tsc` com `checkJs`), carrega o tema e exercita o resolver de cada variante.
- CI rodando o `pnpm check` em matriz: Mantine 7 com React 18, Mantine 8 com React 19, Mantine 9 com React 19.
- README com instalação por tag, tabela de compatibilidade, histórico de versões e este CHANGELOG.

### Removido
- `package-lock.json` duplicado. O repositório usa só o `pnpm-lock.yaml`.

### Validação
- `pnpm check` verde com Mantine 7.17.8, 8.3.18 e 9.8.2. No código anterior, falha com 3 erros de tipo e o erro de carregamento.
- `orcamento-front` (Mantine 7) com esta versão: `tsc --noEmit` e `next build` sem erro.

## [1.2.1] - 2024-12-04

### Alterado
- **Incompatível:** a variante de botão `default-filled` passou a se chamar `secondary`.

### Adicionado
- Variante de botão `ghost` (fundo transparente, hover `gray-2`).
- Tipos da cor `govBlue` em `theme.colors`, via `MantineThemeColorsOverride`.

> Não houve versão 1.2.0: o `package.json` passou direto de 1.1.1 para 1.2.1. A tag `v1.2.1` foi criada depois, em 2026-11-24, no commit `88065c1`, para fixar o estado anterior à 1.3.0.

## [1.1.1] - 2024-10-29

### Adicionado
- Declaração de tipos do módulo (`src/types.d.ts`, campo `types` no `package.json`).

### Corrigido
- O `main` do `package.json` passou a apontar para `src/index.js`.

## [1.1.0] - 2024-10-29

### Adicionado
- Variante de botão `default-filled` (fundo `gray-2`, hover `gray-3`), por meio de um `variantColorResolver`.

### Alterado
- `src/index.ts` passou a ser `src/index.js`.

## [1.0.0] - 2024-10-02

Primeira versão.

### Adicionado
- Tema com paleta própria (incluindo `govBlue`), tipografia Figtree e escalas de espaçamento, raio, fonte e sombra com `--mantine-scale`.

[1.3.0]: https://github.com/SEPLANPI/ui-mantine-config/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/SEPLANPI/ui-mantine-config/tree/v1.2.1
[1.1.1]: https://github.com/SEPLANPI/ui-mantine-config/commit/3a6671c
[1.1.0]: https://github.com/SEPLANPI/ui-mantine-config/commit/dd23077
[1.0.0]: https://github.com/SEPLANPI/ui-mantine-config/commit/241ce5d
