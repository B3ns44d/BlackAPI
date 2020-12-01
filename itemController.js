// ! Import item model
Item = require('./itemModel');

// ! Handle index actions
exports.index = function (req, res) {
    Item.get(function (err, items) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "New item has been added successfully to the list",
            data: items
        });
    });
};
// ! Handle create item actions
exports.new = function (req, res) { 
    var item = new Item();
    item.name = req.body.name ? req.body.name : item.name;
    item.type = req.body.type;
    item.category = req.body.category;
    item.description = req.body.description;
    item.imgUrl = req.body.imgUrl;
    item.rate = req.body.rate;
// ! save the item and check for errors
    item.save(function (err) {
        // ! Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New item created!',
                data: item
            });
    });
};
// ! Handle view item info
exports.view = function (req, res) {
    Item.findById(req.params.item_id, function (err, item) {
        if (err)
            res.send(err);
        res.json({
            message: 'Item details loading..',
            data: item
        });
    });
};
// ! Handle update item info
exports.update = function (req, res) {
    Item.findById(req.params.item_id, function (err, item) {
        if (err)
            res.send(err);
        item.name = req.body.name ? req.body.name : item.name;
        item.type = req.body.type;
        item.category = req.body.category;
        item.description = req.body.description;
        item.imgUrl = req.body.imgUrl;
        item.rate = req.body.rate;
// ! save the item and check for errors
        item.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Item Info updated',
                data: item
            });
        });
    });
};
// ! Handle delete item
exports.delete = function (req, res) {
    Item.deleteOne({
        _id: req.params.item_id
    }, function (err, item) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Item deleted'
        });
    });
};