const jwt = require('jsonwebtoken');
const jwtKey = 'my_seceret_key'; // "salt"
const jwtExpiryTimeInMilliSeconds = 60 * 1000 * 15; // 15 min

// in order to keep this example simple and focused in JWT,
//    just create a "little users DB"
const users = {
    user1: 'password1',
    user2: 'password2',
    user3: 'password3',
    user4: 'password4',
    user5: 'password5',
};

// simulate a service whicch checks validity of uname+password
function myCheckUserPasswordService(uname, pass) {
    if (!uname || !pass || (users[uname] != pass)) {
        return false;
    }
    return true;
}
//=======================================================
const signIn = (req, res) => {
    const { username, password } = req.body;
    const isPassOK = myCheckUserPasswordService(username, password);
    if (!isPassOK) {
        // return 401 error status, (authentication not OK)
        return res.status(401).send();
    }
    // if we got here, it means uname+pass OK
    // so, lets create a new token with the username in the payload
    //   which expires X seconds after issue
    let X = jwtExpiryTimeInMilliSeconds;
    const myToken = jwt.sign(
        { username }, jwtKey, { algorithm: "HS256", expiresIn: X }
    )
    console.log('signIn - created myToken: ', myToken);

    // lets add a cookie with our jwt to send to our client
    res.cookie('myToken', myToken, { maxAge: X });
    res.json({ "blessing": "be blessed" });
    //res.end();
}
//=======================================================


const refresh = (req, res) => {
    console.log("refresh - going to try to refresh the token");
    let myStatusCode = 200;
    const theToken = req.cookies.myToken;

    // if there is no "myToken" in the cookies
    if (!theToken) {
        console.log('refresh - couldnt find "myToken" in the cookies');
        myStatusCode = 401;
        return myStatusCode; // 401
    }
    // once we got here it means we have cookie named "myToken"
    //  let's make sure it actually also contains VALID content
    //   (make sure the jwt wasn't "played with")
    let payload;
    try {
        payload = jwt.verify(theToken, jwtKey);
    }
    catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            console.log('refresh - JsonWebTokenError', e);
            myStatusCode = 401;
            return myStatusCode;
        }
        myStatusCode = 400;
        return myStatusCode; // 400
    }

    // Once we got here, it means, 
    // 1) There was a cookie named myToken
    // 2) it was valid (we checked the jwt validity above)
    //  let's refresh (extend the expiry time)
    const newToken = jwt.sign(
        { username: payload.username }, jwtKey, { algorithm: 'HS256', expiresIn: jwtExpiryTimeInMilliSeconds }
    );

    console.log('The new refreshed token: ', newToken);
    res.cookie('myToken', newToken, { maxAge: jwtExpiryTimeInMilliSeconds });
    res.thePayload = payload;
    return myStatusCode;  // returning 200
}

//==================================================

const secretPage = (req, res) => {
    console.log("secretPage - myStatusCode=", res.myStatusCode);
    if (res.myStatusCode === 200) {
        res.send(`Secret Page welcomes you, 
                    ${res.thePayload.username}!! 
                    ${JSON.stringify(res.thePayload)}`);
    }
    else {
        res.status(res.myStatusCode).send();
    }
}

module.exports = {
    signIn,
    secretPage,
    refresh
}