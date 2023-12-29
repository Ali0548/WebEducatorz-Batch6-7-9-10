const checkToken = (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (token!=="webEducatroz0005588") {
            return res.status(401).send('Access denied!');
        } else {
            next();
        }
    } catch (error) {

    }
}

module.exports = {checkToken};