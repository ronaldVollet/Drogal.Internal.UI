import {
    Password as PureInputPassword,
    type PasswordProps
} from "primereact/password";

/**
 * @description
 * Componente InputPassword baseado no PrimeReact.
 * Utilizado para entrada segura de senhas, com recursos
 * como máscara, feedback de força e alternância de visibilidade.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `Password` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputPassword = (props: PasswordProps) => {
  return (
    <div className="flex flex-column gap-2">
      {props?.title && (
        <label htmlFor={props.name}>{props.title}</label>
      )}
      <PureInputPassword {...props} />
    </div>
  );
};
