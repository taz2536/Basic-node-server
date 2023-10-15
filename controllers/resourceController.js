
/**
 * Gets all resources
 * @param {*} req The request object
 * @param {*} res The response object updated to reflect the response
 * @param {*} next 
 * @route GET /api/v1/resource
 * @access Public
 */
exports.getResources = (req, res, next) => {

    res
        .status(200)
        .json({
            success: true,
            msg: "Showing List of All Resources"
        });

};

/**
 * Gets particular resource
 * @param {*} req The request object
 * @param {*} res The response object updated to reflect the response
 * @param {*} next 
 * @route GET /api/v1/resource/:id
 * @access Public
 */
exports.getResource = (req,res, next) => {

    res
        .status(200)
        .json({
            success : true,
            msg : `Showing resource with resourseID: ${req.params.id}`
        });

};


/**
 * Deletes particular resource
 * @param {*} req The request object
 * @param {*} res The response object updated to reflect the response
 * @param {*} next 
 * @route DELETE /api/v1/resource/:id
 * @access Public
 */
exports.deleteResource = (req, res, next) => {

    res
        .status(200)
        .json({
            success : true,
            msg : `Deleted resource with resourseID: ${req.params.id}`
        });
    
};

/**
 * Creates particular resource
 * @param {*} req The request object
 * @param {*} res The response object updated to reflect the response
 * @param {*} next 
 * @route PUT /api/v1/resource/
 * @access Private
 */
exports.createResource = (req, res, next) => {

    res
        .status(200)
        .json({
            success : true,
            msg : `Created resource with resourseID: ${Math.floor(Math.random() * 10000000000000000).toString(16)}`
        });
    
};

/**
 * Updates particular resource
 * @param {*} req The request object
 * @param {*} res The response object updated to reflect the response
 * @param {*} next 
 * @route PUT /api/v1/resource/:id
 * @access Private
 */
exports.updateResource = (req, res, next) => {

    res
        .status(200)
        .json({
            success : true,
            msg : `Updated resource with resourseID: ${req.params.id}`
        });
    
};