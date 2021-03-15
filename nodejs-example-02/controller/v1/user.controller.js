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