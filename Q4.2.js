const Joi = require("joi");


app.post("/", async(req, res)=>{
    try {
        const schema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const user = new User(req.body);
        await user.save();
    } catch (error) {
        res.status(500).json({ error: "Failed to register user" });
    }
})
