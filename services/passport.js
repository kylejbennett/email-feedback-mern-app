const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.GOOGLE_OAUTH_CLIENT_ID,
            clientSecret: keys.GOOGLE_OAUTH_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("access token", accessToken);
            console.log("refresh token", refreshToken);
            console.log("profile", profile);
        }
    )
);