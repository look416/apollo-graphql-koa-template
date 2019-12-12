import {gql} from 'apollo-server-koa'
export const userMutation = `
    books: [Book]
`;

export const userMutationResolvers = {
    books: () => {
        return [
            {
                title: 'a'
            },
            {
                title: 'b'
            }
        ]
    }
};