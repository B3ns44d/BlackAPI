// ! Initialize express router
let router = require("express").Router();
// ! Set default API response
router.get("/", function (req, res) {
  res.json({
    status: `API It's Working so freaking good`,
    message: `So let's welcome you to my API if you don't know what this API is, 
                it's just a list of all the movies and series that I've watched in my life`,
  });
});
// ! Import items controller
var itemsController = require("./itemController");
// ! items routes
router.route("/items").get(itemsController.index).post(itemsController.new);

router
  .route("/items/:item_id")
  .get(itemsController.view)
  .patch(itemsController.update)
  .put(itemsController.update)
  .delete(itemsController.delete);

// ! Export API routes
module.exports = router; // ? items
