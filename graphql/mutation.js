import { userMutation, userMutationResolvers } from "./users/mutation";

export const mutation = `
    type Mutation {
        ${userMutation}
    }
`;

export const resolvers = {
    Mutation: {
        ...userMutationResolvers
    }
};