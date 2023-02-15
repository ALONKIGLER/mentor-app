const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const extractToken =
  require("passport-jwt").ExtractJwt.fromAuthHeaderAsBearerToken;
const User = require("../models/user");

passport.use(
  new JwtStrategy(
    {
      secretOrKey: "secret string",
      jwtFromRequest: extractToken(),
    },
    async (payload, done) => {
      console.log("email", payload.userId.email);
      const email = payload.userId.email;
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "User not found" });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
