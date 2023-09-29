const router = require("express").Router();

const constant = require("../../../Const");
const { getResources, 
        getResource, 
        deleteResource,
        createResource,
        updateResource
    } = require("../../../controllers/resourceController");

router.route("/")
    .get(getResources)
    .post(createResource);

router.route("/:id")
    .get(getResource)
    .put(updateResource)
    .delete(deleteResource);

module.exports = router;





