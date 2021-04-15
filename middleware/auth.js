import jwt from "jsonwebtoken";

// check that a user has the right to CRUD actions
// TODO: upgrade secret to actual secret
// TODO: cover this thing with tests after finishing app's main logic.

const auth = async (req, res, next) => {
    try {
        console.log(req.headers)
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.lengh < 500;
        let decodedData;
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, "test");
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.verify(token);
            req.userId = decodedData?.sub;
        }
        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;
