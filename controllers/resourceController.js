exports.getResources = (req, res, next) => {

    res
        .status(200)
        .json({
            success: true,
            msg: "Showing List of All Resources"
        });

};

exports.getResource = (req,res, next) => {

    res
        .status(200)
        .json({
            success : true,
            msg : `Showing resource with resourseID: ${req.params.id.slice(1)}`
        });

};

exports.deleteResource = (req, res, next) => {

    res
        .status(200)
        .json({
            success : true,
            msg : `Deleted resource with resourseID: ${req.params.id.slice(1)}`
        });
    
};

exports.createResource = (req, res, next) => {

    res
        .status(200)
        .json({
            success : true,
            msg : `Created resource with resourseID: ${Math.floor(Math.random() * 10000000000000000).toString(16)}`
        });
    
};

exports.updateResource = (req, res, next) => {

    res
        .status(200)
        .json({
            success : true,
            msg : `Updated resource with resourseID: ${req.params.id.slice(1)}`
        });
    
};