# Github Bootcamp Cleanup
### Problem

After completing my software engineering bootcamp my Github was riddled with random open pull requests. This made it difficult to view the pull requests I actually care about. Unfortunatly Githubs website does not support mass closing of pull requests but they do via the their GraphQL API. This was a great opportunity to learn some GraphQL and cleanup my Github. That being said, this project is quick and dirty, there are not tests, edge cases are not covered, and the code is not the prettiest.

### Technology Used
- [React](https://reactjs.org)
- [Github GraphQL API](https://docs.github.com/en/graphql)
- [Apollo](https://www.apollographql.com)
- [Bootstrap](https://getbootstrap.com)
- [Bootswatch](https://bootswatch.com)
- [React-Bootstrap](https://react-bootstrap.github.io/)

### Running
1. Run `yarn install` to install all required packages
1. Run `yarn start` to run the app in the development mode.
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
1. Enter your [Github Personal Access Token](https://github.com/settings/tokens/new) which has permissions for "workflow" to browse and close your pull requests.
   - Sort by pull request state.
   - Edit pagination options.
   - Select pull requests
   - Link to pull requests on github.
<img width="1792" alt="Screen Shot 2021-03-08 at 7 42 30 PM" src="https://user-images.githubusercontent.com/61996913/110416220-26affb00-8048-11eb-9a80-35e8d56994ff.png">
