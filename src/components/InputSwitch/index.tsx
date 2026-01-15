import {
    InputSwitch as PureInputSwitch,
    type InputSwitchProps
} from "primereact/inputswitch";

/**
 * @description
 * Componente InputSwitch baseado no PrimeReact.
 * Utilizado para alternar estados booleanos como
 * ativado/desativado ou ligado/desligado.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `InputSwitch` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputSwitch = (props: InputSwitchProps) => {
  return (
    <div className="flex flex-column gap-2">
      {props?.title && (
        <label htmlFor={props.name}>{props.title}</label>
      )}
      <PureInputSwitch {...props} />
    </div>
  );
};
