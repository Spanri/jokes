import { Router } from 'express'

const router = new Router()

/**
 * @api {get} /users/:id Retrieve user
 * @apiName RetrieveUser
 * @apiGroup User
 * @apiPermission public
 * @apiSuccess {Object} user User's data.
 * @apiError 404 User not found.
 */
router.get('/', function (req, res) {
  res.send('hello world')
})

export default router
