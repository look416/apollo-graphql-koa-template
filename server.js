import {ApolloServer, gql} from 'apollo-server-koa';
import {models, resolvers as modelResolver} from './graphql/model';
import {query, resolvers as queryResolver} from './graphql/query';
import {mutation, resolvers as mutationResolver} from './graphql/mutation';

const typeDefs = gql`
${models}
${query}
${mutation}
`;

const resolvers = {
    ...modelResolver,
    ...queryResolver,
    ...mutationResolver
    
};

const server = new ApolloServer({typeDefs, resolvers});
export default server;