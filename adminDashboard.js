const router = require('express').Router();

// init. middleware
const isAdminThenSlideWindow = require('./middlewares/isAdminThenSlideWindow');
router.use(isAdminThenSlideWindow);

router.get('/forms/franchisor-registration/all/:page', (req, res) => {

});
router.get('/forms/franchisor-registration/read/:page', );
router.get('/forms/franchisor-registration/unread/:page', );
router.put('/forms/franchisor-registration/mark-read/:objectId');
router.put('/forms/franchisor-registration/mark-unread/:objectId');
router.put('/forms/franchisor-registration/enable-listing/:objectId');
router.put('/forms/franchisor-registration/disable-listing/:objectId');
router.delete('/forms/franchisor-registration/:objectId');

router.get('/forms/free-advice/:page');
router.put('/forms/free-advice/mark-read/:objectId');
router.put('/forms/free-advice/mark-unread/:objectId');
router.delete('/forms/free-advice/:objectId');

router.get('/forms/newsletter-subscribers/:page');
router.put('/forms/newsletter-subscribers/mark-allread');
router.delete('/forms/newsletter-subscribers/:objectId');



router.get('/web-content/trending-videos');
router.post('/web-content/trending-videos');
router.delete('/web-content/trending-videos');

router.get('/web-content/top-franchise-opportunities/all/:page')
router.get('/web-content/top-franchise-opportunities/promoted/:page')
router.get('/web-content/top-franchise-opportunities/not-promoted/:page')
router.put('/web-content/top-franchise-opportunities/mark-promoted/:objectId')
router.put('/web-content/top-franchise-opportunities/mark-not-promoted/:objectId')



router.put('/profile/change-username')
router.put('/profile/change-password')

module.exports = router;