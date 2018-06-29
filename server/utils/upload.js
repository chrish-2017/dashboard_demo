/**
 * Created by ling.zou on 2018/5/7.
 */

/*const formidable = require('formidable');
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const uploadfoldername = 'uploadfiles';
const uploadfolderpath = __dirname + '/' + uploadfoldername;

const port = 8888;

http.createServer(function (req, res) {
  if (req.url === 'upload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();

    const assitUrl = 'http://localhost:9000/#/editor';

    form.parse(req, function (err, fields, files) {
      if (err) {
        return console.log('formidable, form.parse err');
      }

      const file = files['wangEditor_uploadImg'];
      const tempfilepath = file.path;
      const type = file.type;

      let filename = file.name;
      let extname = filename.lastIndexOf('.') >= 0
                        ? filename.slice(filename.lastIndexOf('.') - filename.length)
                        : '';
      if (extname === '' && type.indexOf('/') >= 0) {
        extname = '.' + type.split('/')[1];
      }
      filename = Math.random().toString().slice(2) + extname;

      filenewpath = uploadfolderpath + '/' + filename;

      fs.rename(tempfilepath, filenewpath, function (err) {
        let result = '';
        let imgUrl = '';

        if (err) {
          console.log('fs.rename.err');
          result = assitUrl + '#上传失败';
        } else {
          console.log('fs.rename.done');
          imgUrl = 'http://localhost:' + port + '/' + uploadfoldername + '/filename';
          result = assitUrl + '#ok|' + imgUrl;
        }

        res.writeHead(200, {
          'Content-type': 'text/html'
        });
        res.end('<iframe src="' + result + '"></iframe>');
      });
    });
  } else {
    const pathname = url.parse(req.url).pathname;
    const filepath = path.join(__dirname, pathname);
    fs.readFile(filepath, function (err, file) {
      if (err) {
        res.writeHead(404);
        console.log('response file error: ' + filepath);
        res.end('404 NOT FOUND...');
        return;
      }

      res.writeHead('200');
      console.log('response file success: ' + filepath);
      res.end(file);
    });
  }
}).listen(port);

console.log('server start at ' + port + '...');*/

const inspect = require('util').inspect;
const Busboy = require('busboy');
const path = require('path');
const fs = require('fs');

function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true
    }
  }
}

function getSuffixName(fileName) {
  const nameList = fileName.split('.');
  return nameList[nameList.length - 1];
}

function upload(ctx, options) {
  const req = ctx.req;
  const busboy = new Busboy({ headers: req.headers });

  const fileType = options.fileType || 'common';
  const filePath = path.join(options.path, fileType);
  const mkdirResult = mkdirsSync(filePath);

  return new Promise((resolve, reject) => {
    const result = {
      errorno: 1,
      data: [],
      formData: {}
    };

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      // const fileName = Math.random().toString(16).substr(2) + '.' + (options.suffix || getSuffixName(filename));
      const saveTo = path.join(filePath, filename);
      file.pipe(fs.createWriteStream(saveTo));
      result.data.push(filename);

      file.on('end', function() {
        result.errorno = 0;
      });
    });
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      result.formData[fieldname] = inspect(val);
    });
    busboy.on('finish', function() {
      resolve(result);
    });
    busboy.on('error', function(err) {
      reject(err);
    });
    req.pipe(busboy);
  })
}

module.exports = upload;
