
module.exports = (app,passport)=>{

    var passportLinkedin = require("passport-linkedin-oauth2").Strategy;
        var data = {};
        var image;
        passport.use(
            new passportLinkedin({
                clientID: "813qahg8cp74t0",
                clientSecret: "9ZgkI7fqPQZ5trVI",
                callbackURL: "http://localhost:3000/auth/linkedin/callback"
            },
            function(acceToken, refreshToken, profile, done) {
                data.name = profile.displayName;
                image = profile.photos[0].value;
                // console.log(image);
                console.log(profile);
                console.log(acceToken);
                done(null, profile);
            })
        )
    
        passport.serializeUser((user, done) =>{
            done(null, user)
        })
    
        app.get("/auth/linkedin", passport.authenticate('linkedin'));
    
        app.get("/auth/linkedin/callback", passport.authenticate('linkedin'), (req, res) =>{
            // res.send("Login successfully!")
            // res.send(data);
            res.send("<center><h1>"+data.name+"</h1><img src='"+image+"'</img>");
        })
    
    }
    
    