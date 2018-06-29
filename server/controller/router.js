/**
 * Created by ling.zou on 2018/4/19.
 */

const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const router = new Router();
const user = require('../service/user');
const upload = require('../utils/upload');

router.prefix('/api');

router.get('/lang', async (ctx) => {
  const lang = ctx.query.lang;
  try {
    const langJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'server/i18n/' + lang + '.json')));
    ctx.body = {
      status: 1,
      lang: langJson
    }
  } catch (err) {
    ctx.throw(500, err);
  }
});

router.post('/login', async (ctx) => {
  const data = ctx.request.body;
  const result = await user.getOne(data);
  ctx.body = {
    status: 1,
    user: result
  }
});

router.get('/user', async (ctx) => {
  const result = await user.getAll();
  ctx.body = {
    status: 1,
    users: result
  }
});

router.post('/user', async (ctx) => {
  const data = ctx.request.body;
  await user.add(data);
  ctx.body = {
    status: 1
  }
});

router.put('/user', async (ctx) => {
  const data = ctx.request.body;
  await user.edit(data);
  ctx.body = {
    status: 1
  }
});

router.delete('/user/:_id', async (ctx) => {
  const id = ctx.params;
  await user.del(id);
  ctx.body = {
    status: 1
  }
});

router.post('/upload', async (ctx) => {
  const serverFilePath = path.join(process.cwd(), 'server/upload');
  const result = await upload(ctx, {
    fileType: 'album',
    path: serverFilePath,
    suffix: 'jpg'
  });
  ctx.body = result;
});

module.exports = router;
