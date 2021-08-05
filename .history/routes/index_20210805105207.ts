import express from 'express';
const router = express.Router();
export default router;

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* GET document page. */
router.get('/document', function(req, res, next) 
{
  res.render('index', { title: 'Documents' });
});

/* GET notification page. */
router.get('/notification', function(req, res, next) 
{
  res.render('index', { title: 'Notification' });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) 
{
  res.render('index', { title: 'User Profile' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact' });
});
//module.exports = router;
