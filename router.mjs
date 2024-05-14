import express from 'express'
import { posttaskfunction } from "./controler/taskcontroler.mjs"
import { login } from "./controler/userscontroler.mjs"
import { Schemafunction } from "./controler/userscontroler.mjs"
import { getfunction } from "./controler/taskcontroler.mjs"
import { normalfunction } from "./controler/taskcontroler.mjs"
// import { Router } from 'express'
const router = express.Router()
router.route('/sin').post(login)
router.route('/pull').post(Schemafunction)
router.route('/view').get(getfunction)
router.route('/dele/:id').delete(normalfunction)
router.route('/addd').post(posttaskfunction)


export default router