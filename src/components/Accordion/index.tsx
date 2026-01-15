import { Accordion as PureAccordion, type AccordionProps } from "primereact/accordion";

/**
 * @description
 * Componente Accordion baseado no PrimeReact.
 * Utilizado para organizar conteúdos colapsáveis em seções expansíveis.
 *
 * Encapsula o componente `Accordion` do PrimeReact,
 * mantendo compatibilidade total com suas props originais.
 */
export const Accordion = (props: AccordionProps) => {
  return <PureAccordion {...props} />;
};


import { AccordionTab as PureAccordionTab, type AccordionTabProps } from "primereact/accordion";

/**
 * @description
 * Componente AccordionTab baseado no PrimeReact.
 * Representa uma aba individual dentro do componente Accordion.
 *
 * Deve ser utilizado como filho direto do componente `Accordion`.
 * Todas as props originais do PrimeReact são suportadas.
 */
export const AccordionTab = (props: AccordionTabProps) => {
  return <PureAccordionTab {...props} />;
};