import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
mutation signup($username: String!,$email: String!,$password: String!) {
  register(input: {username: $username, email: $email, password: $password }) {
    jwt
      user {
        username
        email
      }
    }
  }
`

export const useRegisterMutation = () => {
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER)
  return { registerMutation, data, loading, error }
}
