import { userModel, userResolvers } from "./users/model";


export const models = `
    ${userModel}
`;

export const resolvers = {
    ...userResolvers
};