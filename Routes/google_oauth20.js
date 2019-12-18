module.exports = (google_oauth20,passport)=>{

    const GoogleStrategy = require("passport-google-oauth20").Strategy;
    var data = {};
    var image;
    passport.use(
        new GoogleStrategy({
            clientID: "1068327690839-9opvkgbjrkle3s107kfh896dgdiigqsp.apps.googleusercontent.com",
            clientSecret: "VYoQINUjUMc3afmrVu4evmOV",
            callbackURL: "http://localhost:3000/callback"
        },
        function(acceToken, refreshToken, profile, done) {
            data.name = profile.displayName;
            image = profile._json.picture;
            // console.log(image);
            console.log(profile);
            console.log(acceToken);
            done(null, profile);
        })
    )

    passport.serializeUser((user, done) =>{
        done(null, user)
    })

    google_oauth20.get("/", passport.authenticate('google', {scope: ['profile']}));

    google_oauth20.get("/callback", passport.authenticate('google'), (req, res) =>{
        // res.send("Login successfully!")
        // res.send(data);
        res.send("<center><h1>"+data.name+"</h1><img src='"+image+"'</img>");
    })

}

