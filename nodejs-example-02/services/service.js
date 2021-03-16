var model = require("../configs/models/users.model");

exports.getUser = () => {
    try {
        console.log("service getUser")
        var user = model.users.findAll();
        console.log(user);
        return "A";
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
};