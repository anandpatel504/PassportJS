const express = require("express");
const app = express();
const passport = require("passport");
app.use(passport.initialize());

// google_oauth20
var google_oauth20 = express.Router();
app.use("/", google_oauth20);
require("./Routes/google_oauth20")(google_oauth20,passport);

// passport-facebook
var passport_facebook = express.Router();
app.use("/", passport_facebook);
require("./Routes/passport_facebook")(passport_facebook,passport)

// passport-linkedin
var linkedin = express.Router();
app.use("/", linkedin);
require("./Routes/linkedin_oauth2")(linkedin,passport)

const server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log(host, port)
    console.log("server is running mode....!")
})