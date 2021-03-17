
const services = require('../services/service');

function test_func(req, res, next) {
    console.log("test_func");
    var cc = services.getTest_func();
    console.log("====================== cc ================= :",cc);
    res.json(cc);
}
async function getUser (req,res,next) {
    console.log("controller getUser")
    var B =  await services.getUser();
    console.log("B ==========================================:", B);
    res.json(B);
}
module.exports= {
    getUser,
    test_func
}

module.exports.getMain = (req,res,next) => {
    res.render("main.ejs")
}

/*
module.exports.getUser = async function(req,res,next){
    console.log("controller getUser")
    var B = await services.getUser();
    console.log("B ==========================================:", B);
    res.json(B);
}*/
module.exports.get = (req,res,next) => {
    try {
        const users = [{
            nickname: 'nickname_1',
            nickname: 'password_1'
        },
        {
            nickname: 'nickname_2',
            nickname: 'password_2'
        },
        {
            nickname: 'nickname_3',
            nickname: 'password_3'
        }]
        return res.json({users})
    } catch (err) {
        next(err)
    }
}