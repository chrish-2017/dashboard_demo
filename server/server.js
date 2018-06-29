/**
 * Created by ling.zou on 2018/4/18.
 */

/*const cluster = require('cluster');
const http = require('http');
const app = require('./index');

function errorMsg() {
  console.log('Something must be wrong with the connection...');
}

function startWork() {
  const worker = cluster.fork();
  console.log('work #' + worker.id + 'start');
}

const timeouts = [];
if (cluster.isMaster) {
  const numCPUs = require('os').cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();
    worker.on('message', (message) => {
      console.log(message.from + ': ' + message.type + ' ' + message.data.number + ' = ' + message.data.result);
    });
  }

  cluster.on('online', (worker) => {
    console.log('worker #' + worker.id + ' online');
  });

  cluster.on('fork', (worker) => {
    timeouts[worker.id] = setTimeout(errorMsg, 2000);
  });

  cluster.on('listening', (worker) => {
    console.log('worker #' + worker.id + ' connected');
    clearTimeout(timeouts[worker.id]);
  });

  cluster.on('exit', (worker, code, signal) => {
    clearTimeout(timeouts[worker.id]);
    startWork();
  });

  cluster.on('disconnect', (worker) => {
    console.log('worker #' + worker.id + ' disconnected');
  });
} else {
  http.createServer(app.callback()).listen(3000);
  console.log('server is running at http://localhost:3000');
}*/

const app = require('./index');

app.listen(3000);
console.log('server is running at http://localhost:3000');
