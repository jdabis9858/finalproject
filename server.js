var bodyParser = require("body-parser")
const cors = require("cors")
var express = require("express")
var mongojs = require("mongojs")
var tasks = require("./routes/tasks")




var app = express();
var PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

app.use("/api", tasks);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
