
const signupRepository = require('../repositories/signup.repository');

class signupService {
    signupRepository = new signupRepository

    createUesrs = async (nickname, password, confirm) => {
        try {
            // 서비스에서 비밀번호 확인 및 에러처리 대부분
            const createUesrsData = this.signupRepository.createUesrs(nickname, password)
            console.log(createUesrsData)
            return createUesrsData
        } catch (err) {
            console.error(err)
            return res
                .status(400)
                .json({ errormessage: "서비스에서 에러 발생" })
        }
    }
}
module.exports = signupService;