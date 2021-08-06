"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
router.get('/document', function (req, res, next) {
    res.render('index', { title: 'Documents', page: 'documents' });
});
router.get('/notification', function (req, res, next) {
    res.render('index', { title: 'Notification', page: 'notification' });
});
router.get('/profile', function (req, res, next) {
    res.render('index', { title: 'User Profile', page: 'userprofile' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact' });
});
//# sourceMappingURL=index.js.map