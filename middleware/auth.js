import jwt from "jsonwebtoken";

// check that a user has the right to CRUD actions
// TODO: upgrade secret to actual secret

const auth = async (req, res, next) => {
    try {
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
