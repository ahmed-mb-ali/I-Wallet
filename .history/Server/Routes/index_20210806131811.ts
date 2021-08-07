import express from 'express';
const router = express.Router();
export default router;

/* GET home page. */
router.get('/', function(req,res,next)
{
    res.render('index', {title: 'Home', page: 'home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET document page. */
router.get('/document', function(req, res, next) 
{
  res.render('index', { title: 'Documents', page: 'documents' });
});

/* GET notification page. */
router.get('/notification', function(req, res, next) 
{
  res.render('index', { title: 'Notification', page: 'notification' });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) 
{
  res.render('index', { title: 'User Profile', page: 'userprofile' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Us', page: 'contact' });
});
//module.exports = router;
