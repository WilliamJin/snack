var querystring = require("querystring");

function start(response, postData){
  console.log("Request handler 'start' was called.");

  var body ='<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<h1> LogIn Example</h1>'+
    '<form action="/upload" method="post">'+
    'Account : <input type="text" name="account"><br><br>' +
    'Password: <input type="text" name="password"><br><br>'+
    '<input type="submit" value="Login" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData){
  console.log("Request handler 'upload' was called.");
   response.writeHead(200,{"Content-Type":"text/plain"});
  //response.write("You've sent: "+ querystring.parse(postData).account);
    //response.write("You've sent: "+ querystring.parse(postData).text);
  if ("admin" == querystring.parse(postData).account && "Password" == querystring.parse(postData).password) {
      response.write("Login Successfully");
  }      
  else {
         response.write("Login Failed");
  }
       
  response.end();
}

exports.start = start;
exports.upload = upload;