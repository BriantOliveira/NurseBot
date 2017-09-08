<!-- Calling the dependecies -->
var express = require('express');
var bodyParser = require('body-parser');
<!--End of call-->

<!--Setting up the server-->
var app = express();
var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function (req, res) {res.status(200).send('Hello guys, I\'m not feeling well today! I won\'t attend to class')});

app.listen(port, function(){
  console.log('Listening on port' + port);
});

<!--Here is where the bot start-->
app.post('/hello', function(req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
      <!--JSON response-->
    text:'Hello' + userName + ', I\'m not feeling well today, I\'am so sorry but I won\' be able to attend to class today'
  };
    if(userName !== 'slackbot') {
        return res.status(200).json(botPayload);
        } else{
            return res.status(200).end;
    }

});