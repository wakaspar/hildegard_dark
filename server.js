/* Server.js contains JavaScript code that powers Node's
Express Server & API */

// Express server definition
var express = require('express');
// Defines 'app' as a new Express app.
var app = express();
// Load up MongoDB noSQL data models
var db = require('./models');
// Profile Data: hardcoded to server as it's static and not used often.
var profile = {
  name: "Adam Kaspar - Peronal Website",
  hometown: "Nashville, TN",
  projectName: "Hildegard 2.0 ~ Dark Edition",
  repo: "https://github.com/wakaspar",
};

// Handles CORS errors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve static files from /public
app.use(express.static('public'));

/* HTML Endpoints */
// Serves index.html as homepage
app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');
})
// Serves 'profile' as .json
app.get('/profile', function (req, res){
  res.send(profile);
})
// Serves html files from /templates for Angular's routes in app.js
app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + 'public/templates/' + name + '.html');
});

/* JSON Endpoints */
// Get all projects
app.get('/api/projects', function allProjects(req, res){
  db.Project.find(function(err, projects){
    if(err){console.log('GET /api/projects error: ', err);}
    res.send(projects);
  });
});

/* Server Catch-all */
// redirect all other paths to index
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

// Listen on port 3000
app.listen(process.env.PORT || 7777, function(){
  console.log('Hilde Dark airborne and listening @ localhost:7777/');
});
