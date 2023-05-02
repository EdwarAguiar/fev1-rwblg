import { gql, useQuery } from '@apollo/client'

export const GETUSER = gql`
query getUser($id: ID!) {
  usersPermissionsUser(id: $id) {
    data {
      id
      attributes {
        username,
        email
      }
    }
  }
}
`

export const useGetUserQuery = () => {
  const [getUserQuery, { data, loading, error }] = useQuery(GETUSER)
  return { getUserQuery, data, loading, error }
}
