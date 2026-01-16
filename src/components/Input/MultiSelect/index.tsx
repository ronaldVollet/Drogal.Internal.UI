import {
    MultiSelect as PureMultiSelect,
    type MultiSelectProps
} from "primereact/multiselect";

/**
 * @description
 * Componente MultiSelect baseado no PrimeReact.
 * Utilizado para seleção de múltiplos itens a partir
 * de uma lista de opções.
 *
 * Ideal para cenários onde o usuário pode escolher
 * mais de um valor em formulários ou filtros.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `MultiSelect` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const MultiSelect = (props: MultiSelectProps) => {
  return (
    <div className="flex flex-column gap-2">
      {props?.title && (
        <label htmlFor={props.name}>{props.title}</label>
      )}
      <PureMultiSelect {...props} />
    </div>
  );
};
