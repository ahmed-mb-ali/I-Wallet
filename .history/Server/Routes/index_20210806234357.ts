import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayDocumentsPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayNotificationPage, DisplayRegisterPage, DisplayUserProfilePage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET document page. */
router.get('/document', DisplayDocumentsPage);

/* GET profile page. */
router.get('/profile', DisplayUserProfilePage);

/* GET notification page. */
router.get('/notification', DisplayNotificationPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET - display login page - with /login . */
router.get('/login', DisplayLoginPage);

/* POST - process login page when user clicks Login Button */
router.post('/login', ProcessLoginPage);

/* GET - display register page - with /register . */
router.get('/register', DisplayRegisterPage);

/* POST - process register page when user clicks Register Button */
router.post('/register', ProcessRegisterPage);

/* GET - process the logout page - with /logout . */
router.get('/logout', ProcessLogoutPage);

//module.exports = router;