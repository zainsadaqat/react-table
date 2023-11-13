import { format } from "date-fns";

// accessor targeting the column name
// If accessor got missed and data is present, then react-table won't display that data
export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",

    // @ts-expect-error "Fix typescript error here on the value"
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];
