const express = require('express');
const router = express.Router();

/* GET users listing by /users */
router.get('/users', (req, res, next) => {
    const users = [
        {userId: 1, userName: 'Adi'},
        {userId: 2, userName: 'Mada'},
        {userId: 3, userName: 'Radu'},
    ];

    res.status(200).send({
        success: true,
        users
    });
});

/* GET users listing by /users */
router.get('/api-img', (req, res, next)=> {
    const img = [
        {imageId: 1, imageDesc: 'Bear'},
        {imageId: 2, imageDesc: 'Dog'},
        {imageId: 3, imageDesc: 'Cat'},
    ];

    res.status(200).send({
        success: true,
        img
    });
});



module.exports = router;
