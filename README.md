# @ui/mantine-config

Tema Mantine padrão dos fronts da SEPLAN: paleta (incluindo `govBlue`), tipografia Figtree, escalas com `--mantine-scale` e as variantes de botão `secondary` e `ghost`.

## Instalação

Sempre fixe uma **tag**. Sem tag, o pacote aponta para a `main`, e qualquer mudança nela chega ao projeto no próximo install sem lockfile.

```bash
pnpm add github:SEPLANPI/ui-mantine-config#v1.3.0
```

```tsx
import { MantineProvider } from "@mantine/core"
import { theme } from "@ui/mantine-config"

<MantineProvider theme={theme}>…</MantineProvider>
```

## Compatibilidade

| Versão | `@mantine/core` | React |
|---|---|---|
| `v1.2.1` | 7 | 18 |
| `v1.3.0` | 7, 8 e 9 | 18 (Mantine 7/8) · 19.2+ (Mantine 9) |

A `v1.3.0` não muda a aparência: corrige um import que impedia o carregamento em ESM (erro no Turbopack, padrão do Next 16) e completa a `border` das variantes de botão com o valor padrão do Mantine.

## Histórico de versões

| Versão | Data | Resumo |
|---|---|---|
| 1.0.0 | 2024-10-02 | Primeira versão: paleta (com `govBlue`), tipografia Figtree e escalas com `--mantine-scale` |
| 1.1.0 | 2024-10-29 | Variante de botão `default-filled` |
| 1.1.1 | 2024-10-29 | Declaração de tipos do módulo |
| 1.2.1 | 2024-12-04 | `default-filled` passa a se chamar `secondary` (incompatível) e entra a variante `ghost` |
| 1.3.0 | 2026-11-24 | Compatível com Mantine 7, 8 e 9; corrige o carregamento em ESM; checagem no CI |

Os detalhes de cada versão estão no [CHANGELOG](./CHANGELOG.md).

## Desenvolvimento

```bash
pnpm install
pnpm check   # tipos (tsc + checkJs) e carregamento do tema
```

O CI roda `pnpm check` contra Mantine 7, 8 e 9 em todo PR.

Para publicar: registrar a versão no [CHANGELOG](./CHANGELOG.md) e no histórico acima, fazer o merge na `main` e depois `git tag -a vX.Y.Z -m "…" && git push origin vX.Y.Z`.
