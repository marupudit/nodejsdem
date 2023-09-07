var http = require("http");

var html = `<html>
            <head>
                            <title>Welcome to My World on AWS !!</title>
                                        </head>
                                                    <body style="background-color:black; text-align:center;font-size:70px;color: red;width:100%;height:50%">
                                                                    <div style="padding:40px;">
                                                                                        Welcome to my world, this is demo on DigitalOcean using Droplets.
                                                                                                        </div>
                                                                                                                        <a style="color:green" target="_blank" href="https://www.hawesandcurtis.co.uk/" /a> Link for the production site
                                                                                                                                        </body>
                                                                                                                                                        </html>`

var DataStore = [];
var server = http.createServer((req,res) =>{
    if(req.url =="/"){
              res.writeHead(200,{"Content-Type":"text/html"});
          res.write(html);
    } else if(req.url =="/get" && req.method == "GET"){
                    res.writeHead(200,{"Content-Type":"text/plain"});
                    res.write("This is a GET method");
                            res.write("" + DataStore);
                }else if(req.url =="/post" && req.method == "POST"){
                                req.on("data",function(data){
                                            DataStore.push(data);
                                                        console.log(data);
                                                                });
                                                                        res.writeHead(200,{"Content-Type":"text/plain"});
                                res.write("This is a POST method");
                            }
                                else{
                                        res.write("Pagenot found");
                                            }
                                                res.end();
                                                });

                                                var port = process.env.PORT || 3000;
                                                server.listen(port,()=>{
                                                            console.log(`Listening in ${port}....`);
                                                });