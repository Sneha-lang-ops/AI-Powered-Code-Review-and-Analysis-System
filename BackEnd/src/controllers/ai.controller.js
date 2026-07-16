const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    try {

        const code = req.body.code;

        if (!code) {
            return res.status(400).json({
                success: false,
                message: "Code is required."
            });
        }

        const response = await aiService(code);

        console.log(response);

        return res.status(200).json({
            success: true,
            review: response
        });

    }  catch (error) {

    console.error(error);

    return res.status(500).json({
        success: false,
        message: error.message
    });
}

};
