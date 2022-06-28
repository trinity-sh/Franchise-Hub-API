const express = require('express');
const router = express.Router();

// init. schemas
const fregn = require('../../schemas/franchisor-registration');
const news = require('../../schemas/newsletter-subscribers');
const admcred = require('../../schemas/admin-login-cred');
const tvid = require('../../schemas/trending-videos');
const fadv = require('../../schemas/free-advice');
const events = require('../../schemas/events');

// init. middlewares
router.use(express.json());

/*
        ?search_by=location
                &?industry=industry
                &?country=country
                &?state=state
        ?search_by=investment
                &?industry=industry
                &?min=min_investment
                &?max=max_investment
*/

router.get('/all', async (req, res) => {
        try {
                if (req.query.search_by == "location")
                        q = {
                                "metadata.is_listed": true,
                                "content.personal_details.industry": req.query.industry,
                                "content.personal_details.country": req.query.country,
                                "content.personal_details.state": req.query.state
                        };

                else if (req.query.search_by == "investment") 
                        q = {
                                "metadata.is_listed": true,
                                "content.personal_details.industry": req.query.industry,
                                "content.personal_details.inv": {
                                        $gt: req.query.min,
                                        $lt: req.query.max
                                }
                        }

                const fregndocs = await fregn.find(q);
                
                return res.json({
                        success: true,
                        payload: fregndocs,
                        ping: req.query
                });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

module.exports = router;
