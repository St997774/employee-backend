import repositories from "../repositories";

const {accountRepository} = repositories;

export default {
    async signIn(req, res, next) {
        try {
            const admin = await accountRepository.singnIn(req);
            if (admin.status) {
                res.status(HttpStatus.OK).json({ success: true, message: "Login success", token: admin.token, userData: admin.userData });
            }
            res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: "unvalid credential" });
        }
        catch (err) {

        }
    },
}