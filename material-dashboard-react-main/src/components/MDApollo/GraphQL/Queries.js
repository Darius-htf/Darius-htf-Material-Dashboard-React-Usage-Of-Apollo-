import { gql } from "@apollo/client";

export const LOAD_CHARTS_DATA = gql`
  query {
    GetReportsChartsData {
      labels
    }
  }
`;
