
let express = require('express');
let route_controller = require('./controller');
let router = express.Router();

router.route('/').get(route_controller.index);
router.route('/new').post(route_controller.new);
router.route('/update/:id').get(route_controller.update);
router.route('/delete/:id').get(route_controller.delete);

module.exports = router;