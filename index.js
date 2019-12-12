import Koa from 'koa';
import Router from '@koa/router';
import server from './server';
import './postModel';

const PORT = 4335;
const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'PlaceHolder, You are here'
});

app.use(router.routes()).use(router.allowedMethods());
server.applyMiddleware({app});

app.listen(PORT, () =>
console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);