import gql from "graphql-tag";
import { pairFieldsQuery } from "./exchange";

// TODO: Dashboard

// TODO: Pools

// TODO: Pairs

// TODO: Tokens

// Gainers
export const gainersQuery = gql`
  query gainersQuery($first: Int! = 1000) {
    pairs(first: $first, orderBy: trackedReserveETH, orderDirection: desc) {
      ...pairFields
      reserveUSDGained @client
      volumeUSDGained @client
      feesUSDGained @client
    }
  }
  ${pairFieldsQuery}
`;

// Losers
export const losersQuery = gql`
  query losersQuery($first: Int! = 1000) {
    pairs(first: $first, orderBy: trackedReserveETH, orderDirection: desc) {
      ...pairFields
      reserveUSDLost @client
      volumeUSDLost @client
      feesUSDLost @client
    }
  }
  ${pairFieldsQuery}
`;
