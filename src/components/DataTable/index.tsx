import {
  DataTable as PureDataTable,
  type DataTableProps,
  type DataTableValueArray
} from "primereact/datatable";

/**
 * @description
 * Componente DataTable baseado no PrimeReact.
 * Utilizado para exibição de dados tabulares com suporte a
 * paginação, ordenação, filtros e seleção de linhas.
 *
 * Implementa tipagem genérica para garantir segurança de tipos
 * nas operações sobre os dados da tabela.
 *
 * Encapsula o componente `DataTable` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const DataTable = <T extends DataTableValueArray>(
  props: DataTableProps<T>
) => {
  return <PureDataTable {...props} />;
};

import { Column as PureColumn, type ColumnProps } from "primereact/column";

/**
 * @description
 * Componente Column baseado no PrimeReact.
 * Representa uma coluna individual dentro do componente DataTable.
 *
 * Deve ser utilizado como filho direto do componente `DataTable`,
 * permitindo configuração de campos, cabeçalhos, templates
 * e comportamentos específicos por coluna.
 */
export const Column = (props: ColumnProps) => {
  return <PureColumn {...props} />;
};


