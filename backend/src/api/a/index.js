import { Router } from 'express'

const router = new Router()

import VK from 'vk-io';

const vk = new VK({
  token: process.env['VK_KEY']
});

/**
 * @api {get} /users/:id Retrieve user
 * @apiName RetrieveUser
 * @apiGroup User
 * @apiPermission public
 * @apiSuccess {Object} user User's data.
 * @apiError 404 User not found.
 */
router.post('/last', async function (req, res) {
  const response = await vk.api.wall.get({
    owner_id: -92876084,
    is_pinned: 0,
    post_type: "post",
    count: req.body.count
  });
  res.send(response)
})

export default router
