import { gql, useMutation } from '@apollo/client'

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`

export const UserAddTodo = () => {
  const [AddTodoMutation, { data, loading, error }] = useMutation(ADD_TODO)
  return { AddTodoMutation, loading, error }
}