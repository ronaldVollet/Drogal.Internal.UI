import {
  TabView as PureTabView,
  type TabViewProps
} from "primereact/tabview";

/**
 * @description
 * Componente TabView baseado no PrimeReact.
 * Utilizado para organizar conteúdos em abas,
 * permitindo alternar entre diferentes painéis.
 *
 * Atua como container principal dos componentes `TabPanel`.
 *
 * Encapsula o componente `TabView` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const TabView = (props: TabViewProps) => {
  return <PureTabView {...props} />;
};
