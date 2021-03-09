import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import PullRequests from '../containers/PullRequests'
import { Form } from 'react-bootstrap'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const App = () => {
  const [githubToken, setGithubToken] = useState('')

  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token')
    const token = githubToken
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <NavigationBar />
      <div className='col-10 my-4 mx-auto'>
        <Form>
          <Form.Group>
            <Form.Label>Github Personal Acess Token</Form.Label>
            <Form.Control
              type='input'
              placeholder='Github Personal Acess Token'
              value={githubToken}
              onChange={(event) => setGithubToken(event.target.value)}
            />
            <Form.Text className='text-muted'>
              Create a token{' '}
              <a href='https://github.com/settings/tokens/new'>here</a>, ensure
              "workflow" is checked. We wont store this but we recommend
              deleting this token when your done.
            </Form.Text>
          </Form.Group>
        </Form>
        <PullRequests />
      </div>
    </ApolloProvider>
  )
}

export default App
