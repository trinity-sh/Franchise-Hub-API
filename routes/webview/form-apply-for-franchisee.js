const express = require('express');
const router = express.Router();

// init. schemas
const applyf = require('../../schemas/apply-for-franchisee');

// init. middlewares
router.use(express.json());

router.post('/new', async (req, res) => {
        try {
                const applyfdoc = new applyf(req.body);
                try {
                        await applyfdoc.save();
                } catch (e) {
                        return res.json({
                                success: false,
                                message: "Form error: " + e
                        });
                }
                
                return res.json({
                        success: true,
                        message: "Form saved successfully"
                });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

module.exports = router;