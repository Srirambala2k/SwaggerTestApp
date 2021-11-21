const express = require("express")
const router = express.Router()

const { GetAllHome, GetHomesByFilter } = require("../controllers/home")


/**
 * @swagger
 * /api/home/:
 *   get:
 *     description: Get all the home information
 *     responses:
 *       200:
 *         description: Returns home Information.
 */
router.route("/").get(GetAllHome)

/**
* @swagger
* /api/home/query/:
*   get:
*     description: Get homes using filters
*     parameters:
*      - in: query
*        name: place
*        schema:
*           type: string
*        description: Return list of homes by place
*      - in: query
*        name: beds
*        schema:
*           type: integer
*        description: Return list of homes by beds  
*     responses:
*       200:
*         description: Returns homes using filters.
*/
router.route("/query/").get(GetHomesByFilter)






module.exports = router