
/**
 * Logs requests to console
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const logger = (req, res, next) => {

    // This variable is available in every req object
    req.var = "dummy variable";
    console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}


module.exports = logger;