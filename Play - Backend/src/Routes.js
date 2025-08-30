const express = require('express');
const KidsController = require('./Controller');

const router = express.Router();

router.post('/createlist', KidsController.Createlist);
router.get('/showlist',KidsController.GetList)
router.put('/updatelist/:id',KidsController.UpdateList)
router.post('/contact-form',KidsController.Contactform)
router.post('/admission',KidsController.AdmissionForm)



module.exports = router;
