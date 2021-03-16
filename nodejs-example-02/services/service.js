const db = require("../configs/models/user.model");

module.exports.getUser = async() => {
    try {
        console.log("service getUser")
        var user = await db.users.findAll({})
        return user;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
};