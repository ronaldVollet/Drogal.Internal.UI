import { Calendar as PureCalendar, type CalendarProps } from "primereact/calendar";

/**
 * @description
 * Componente Calendar baseado no PrimeReact.
 * Utilizado para seleção de datas, horários ou intervalos,
 * oferecendo suporte a diferentes formatos e modos de exibição.
 *
 * Encapsula o componente `Calendar` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const Calendar = (props: CalendarProps) => {
  return <PureCalendar {...props} />;
};
