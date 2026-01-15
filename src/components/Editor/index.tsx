import { Editor as PureEditor, type EditorProps } from "primereact/editor";

/**
 * @description
 * Componente Editor baseado no PrimeReact.
 * Utilizado para edição de conteúdo em formato rich text,
 * oferecendo recursos como formatação, listas, links e mídia.
 *
 * Ideal para criação e edição de textos ricos em formulários
 * ou interfaces administrativas.
 *
 * Encapsula o componente `Editor` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Editor = (props: EditorProps) => {
  return <PureEditor {...props} />;
};
