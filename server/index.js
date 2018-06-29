/**
 * Created by ling.zou on 2018/4/19.
 */

const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
//const router = require('./controller/router');
const routers = require('./middleware/routers');
const db = require('./utils/mongodb');
const path = require('path');
const serve = require('koa-static');
const staticCache = require('koa-static-cache');

app.use(async (ctx, next) => {
  try {
    const pattern = new RegExp('^/api');
    if (pattern.test(ctx.url)) {
      console.log('{ method: ' + ctx.method + ', url: ' + ctx.url + '}');
    }
    await next();
  } catch (err) {
    console.log(err.message);
  }
});

global.db = db;

app.use(bodyParser());

//app.use(router.routes());
app.use(routers());

app.use(serve(path.join(process.cwd(), 'server/upload')));

app.use(staticCache(path.join(process.cwd(), 'dist'), {
  maxAge: 365 * 24 * 60 *60,
  gzip: true,
  usePrecompiledGzip: true,
  dynamic: true
}));

module.exports = app;
