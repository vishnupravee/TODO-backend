import express from 'express'
import { posttaskfunction } from "./controler/addtask.mjs"
import { login } from "./controler/controlerlog.mjs"
import { Schemafunction } from "./controler/controlersignup.mjs"
import { getfunction } from "./controler/gettask.mjs"
import { normalfunction } from "./controler/removetask.mjs"
import { Router } from 'express'

const router = express.Router()
router.route('/sin').post(login)
router.route('/pull').post(Schemafunction)
router.route('/view').get(getfunction)
router.route('/dele/:id').delete(normalfunction)
router.route('/addd').post(posttaskfunction)


export default router