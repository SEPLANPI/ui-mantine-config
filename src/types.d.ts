import { DefaultMantineColor, MantineColorsTuple, MantineThemeOverride } from '@mantine/core';

/**
 * Declaração do módulo da sua biblioteca de configuração
 */
declare module "@ui/mantine-config" {
  export const theme: MantineThemeOverride;
}

/**
 * Extensão dos tipos nativos do Mantine para reconhecer 'govBlue' 
 * e garantir que o autocomplete funcione em todo o projeto.
 */
declare module '@mantine/core' {
  export interface MantineCustomColors {
    // Adicione aqui outras cores caso crie novas paletas no futuro
    govBlue: MantineColorsTuple;
  }

  // Isso permite que 'govBlue' seja usado em props como color="govBlue"
  export type MantineColors = DefaultMantineColor | keyof MantineCustomColors;
}