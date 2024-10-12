import utility from "../services/utility";



export default {
    /**
     * Admin login
     * @param {*} req 
     * @returns 
     */
    async   singnIn(req) {
        try {
            const { email, password } = req.body;
            const adminResult = await user.findOne({ where: { email: email } });

            if (adminResult && adminResult.role === commonConstant.ROLE.ADMIN) {
                if (await utility.comparePassword(password, adminResult.dataValues.password)) {
                    const token = jwt.createToken({ email: adminResult.email });
                    const { ...userData } = adminResult.get();
                    await adminResult.update({ token: token })
                    return { status: true, message: "password matched", token, userData }
                }
                return { status: false, message: "password not matched" }
            }
            return { status: false, message: "admin does not exist" }
        }
        catch (err) {
            console.log(err)
            return false;
        }
    },
}