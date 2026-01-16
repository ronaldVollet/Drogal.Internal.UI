import {
    InputNumber as PureInputNumber,
    type InputNumberProps
} from "primereact/inputnumber";

/**
 * @description
 * Componente InputNumber baseado no PrimeReact.
 * Utilizado para entrada de valores numéricos, com suporte a
 * formatação, casas decimais, moedas e validações.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `InputNumber` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputNumber = (props: InputNumberProps) => {
  return (
    <div className="flex flex-column gap-2">
      {props?.title && (
        <label htmlFor={props.name}>{props.title}</label>
      )}
      <PureInputNumber {...props} />
    </div>
  );
};
