import { Dialog as PureDialog, type DialogProps } from "primereact/dialog";

/**
 * @description
 * Componente Dialog baseado no PrimeReact.
 * Utilizado para exibição de janelas modais, alertas
 * ou conteúdos que exigem foco do usuário.
 *
 * Oferece suporte a cabeçalho, rodapé, controle de visibilidade
 * e comportamentos personalizados.
 *
 * Encapsula o componente `Dialog` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Dialog = (props: DialogProps) => {
  return <PureDialog {...props} />;
};
