const express = require("express")
const router = express.Router()

const {GetAllBike,GetBikeByFilter} = require("../controllers/bike")


/**
 * @swagger
 * /api/bike/:
 *   get:
 *     description: Get all the bike information
 *     responses:
 *       200:
 *         description: Returns bike Information.
 */
router.route("/").get(GetAllBike)

/**
* @swagger
* /api/bike/query/:
*   get:
*     description: Get bike using filters
*     parameters:
*      - in: query
*        name: cc
*        schema:
*           type: integer
*        description: Return list of bike by cc
*      - in: query
*        name: price
*        schema:
*           type: integer
*        description: Return list of bike by price  
*     responses:
*       200:
*         description: Returns bike using filters.
*/
router.route("/query/").get(GetBikeByFilter)






module.exports = router