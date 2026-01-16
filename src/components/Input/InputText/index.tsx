import {
  InputText as PureInputText,
  type InputTextProps
} from "primereact/inputtext";

/**
 * @description
 * Componente InputText baseado no PrimeReact.
 * Utilizado para entrada de textos simples em formulários
 * e interfaces de usuário.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `InputText` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 * 
 */


interface InputTextExtendedProps extends InputTextProps {
  title: string;
}

export const InputText = (props: InputTextExtendedProps) => {
  return (
    <div className="drg-input-spacing">
      <label htmlFor={props.name} className="p-inputtext-label">{props.title}</label>
      <PureInputText {...props} />
    </div>
  );
};
