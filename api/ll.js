var request = require('request');

var appId = 'wxxxxxxxxxxxxxxxdf';
var secret = '1cxxxxxxxxxxxxxxxxxxxxxxxxxxxec1';
module.exports = {
    "post": function (req, res) {
        var js_code = req.body.code;
        console.log(js_code);
        request.get(
            `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`,
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body);
                    res.json(body);
                }
            }
        );
        
    }
}