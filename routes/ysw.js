var express = require('express');
var router = express.Router();
var URL = require('url');
//加载mysql模块
var mysql = require('mysql');
//创建连接
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'my-secret-pw',
  database: 'caterpie'
});
//执行创建连接 
connection.connect();
//SQL语句
var sql = 'SELECT * FROM yushuwu where yid = ? order by chapter';

router.get('/:yid/', function (req, res, next) {
  //解析请求参数
  var params = req.params.yid;

  //查
  connection.query(sql, params, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    console.log(params.id);

    //把搜索值输出
    // res.render('test', { result });
    res.send({ "code": 20000, "data": result });
  });
});

module.exports = router;
