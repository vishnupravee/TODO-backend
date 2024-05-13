import users from "../schemafunction/schemaone.mjs";

export const getfunction = async (req, res) => {

    try {
        const event = await users.find()

        res.json(event)
    } catch (error) {
        console.log(error);
    }
}
// module.exports=getfunction