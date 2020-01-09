// NOTE: Seed.js seeds a MongoDB database with content for Hildgeard.
var db = require('./models')

// PROJECTS: Currently [6] projects long; newest --> oldest
var projectList = [
  {
    "name": "Steamship Beverage Catering",
    "buttons": [ {"name":"in production", "link":"https://www.steamshipbev.com/", "icon":"external alternate", "color":"blue"} ],
    "details": [ {"text":"Squarespace site for Bay Area beverage catering company"},
            {"text":"Functioning state machine controls the movement of print orders in database."},
            {"text":"Improved responsive design / UX of the business's current website."},
            {"text":"Improved SEO, resulting in increased business for client"} ],
    "role": "Consulting web developer & designer",
    "tech": [ {"skill":"Squarespace CMS"},
            {"skill":"Adobe Photoshop"},
            {"skill":"Adobe Illustrator"},
            {"skill":"PHP"},
            {"skill":"jQuery"},
            {"skill":"HTML5"} ],
    "glyphs": [ {"icon":"photoshop"},
            {"icon":"illustrator"},
            {"icon":"jquery"},
            {"icon":"php"},
            {"icon":"css3"},
            {"icon":"html5"} ],
    "image": "sbc"
  },
  {
    "name": "Flywheel Coffee Roasters",
    "buttons": [ {"name":"in production","link":"https://flywheelcoffee.com/", "icon":"external alternate", "color":"blue"} ],
    "details": [ {"text":"Shopify site for local coffee shop in the Haight district"},
            {"text":"Bulit a new logo from custom art using Adobe PS and AI"},
            {"text":"PHP and .liquid experience from digging through legacy code"} ],
    "role": "Consulting web developer & designer",
    "tech": [ {"skill":"Shopify CMS"},
            {"skill":".liquid"},
            {"skill":"Adobe Photoshop"},
            {"skill":"Adobe Illustrator"},
            {"skill":"PHP"},
            {"skill":"CSS3"},
            {"skill":"HTML5"} ],
    "glyphs": [ {"icon":"photoshop"},
            {"icon":"illustrator"},
            {"icon":"php"},
            {"icon":"css3"},
            {"icon":"html5"} ],
    "image": "fcr"
  },
  {
    "name": "OurCade",
    "buttons": [ {"name":"demo", "link":"", "icon":"external alternate", "color":"blue", "status":"disabled"},
            {"name":"repo", "link":"https://github.com/wakaspar/ourcade-react", "icon":"github", "color":"white"} ],
    "details": [ {"text":"ReactJS application that posts high scores from machines at favorite arcades"},
            {"text":"Interacts with the PinballMap.com API."},
            {"text":"Built for easy scalability - from one arcade to many"},
            {"text":"Demo version coming soon!"} ],
    "role": "Full-stack engineer & designer",
    "tech": [ {"skill":"Node.js"},
            {"skill":"ReactJS"},
            {"skill":"Bootsrap"},
            {"skill":"CSS3"},
            {"skill":"HTML5"} ],
    "glyphs": [ {"icon":"nodejs"},
            {"icon":"react"},
            {"icon":"heroku"},
            {"icon":"bootstrap"},
            {"icon":"css3"},
            {"icon":"html5"} ],
    "image": "oc"
  },
  {
    "name": "FreeGoldWatch",
    "buttons":[ {"name":"demo","link":"http://freegoldwatch.herokuapp.com/", "icon":"external alternate", "color":"blue"},
            {"name":"repo","link":"https://github.com/wakaspar/FreeGoldWatch", "icon":"github", "color":"white"} ],
    "details": [ {"text":"DEMO site for a Bay Area screenprinting shop / pinball arcade, GA capstone project"},
            {"text":"Functioning state machine controls the movement of print orders in database"},
            {"text":"Improves responsive design / UX of the business's current website"},
            {"text":"Interacts with the PinballMap & Instagram APIs"} ],
    "role": "Full-stack engineer & designer",
    "tech": [ {"skill":"Ruby on Rails"},
            {"skill":"PostgreSQL"},
            {"skill":"SaSS"},
            {"skill":"jQuery"},
            {"skill":"Semantic UI"},
            {"skill":"CSS3"},
            {"skill":"Heroku"},
            {"skill":"HTML5"} ],
    "glyphs": [ {"icon":"ruby"},
            {"icon":"rails"},
            {"icon":"heroku"},
            {"icon":"postgresql"},
            {"icon":"jquery"},
            {"icon":"sass"},
            {"icon":"css3"},
            {"icon":"html5"} ],
    "image": "fgw"
  }
];

// DATABASE SEEDER / HELPER METHODS
// Remove old projects, create new ones, & exit process
db.Project.remove({}, function(err, projects){
  db.Project.create(projectList, function(err, projects){
    if (err) { return console.log('ERROR', err); }
    console.log("created", projects.length, "projects");
    process.exit();
  });
});

/* NOTE: New Project Template
{
  "name": "",
  "buttons":[ {"name": "", "link": "", "icon": "", "color": ""},
          {"name": "", "link": "", "icon": "", "color": ""} ],
  "details": [ {"text": ""},
          {"text": ""},
          {"text": ""},
          {"text": ""} ],
  "role": "",
  "tech": [ {"skill": ""},
          {"skill": ""},
          {"skill": ""},
          {"skill": ""},
          {"skill": ""},
          {"skill": ""},
          {"skill": ""},
          {"skill": ""} ],
  "glyphs": [ {"icon": ""},
          {"icon": ""},
          {"icon": ""},
          {"icon": ""},
          {"icon": ""},
          {"icon": ""},
          {"icon": ""},
          {"icon": ""} ],
  "image": ".jpg"
}
*/
