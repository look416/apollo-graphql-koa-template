import { userQuery, userQueryResolvers } from "./users/query";

export const query = `
    type Query {
        ${userQuery}
    }
`;

export const resolvers = {
    Query: {
        ...userQueryResolvers
    }  
};