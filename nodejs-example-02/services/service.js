var model = require("../configs/models/");

function getTest_func() {
    return "================= TEST =================";
}

function getUser() {
    try {
        console.log("service getUser")
        // 비동기식 처리 
        // 그래서 상위 호출 함수에 async/await 키워드를 사용해야한다.
        var user = model.users.findAll({}); 
        console.log("============ USER ============",user);
        return user;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}
module.exports.getTest_func = getTest_func;
module.exports = {
   getUser 
}
/*
module.exports.getUser = () => {
    try {
        console.log("service getUser")
        var user = model.users.findAll({});
        console.log("============ USER ============",user);
        return user;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
};*/