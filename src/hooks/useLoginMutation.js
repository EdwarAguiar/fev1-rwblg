import { gql, useMutation } from '@apollo/client'

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(input: { identifier: $email, password: $password }) {
    jwt
  }
}
`

export const useLoginMutation = () => {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN)
  return { loginMutation, data, loading, error }
}
