const express = require("express")
const router = express.Router()

const {GetAllBike,GetBikeByFilter,AddBike,UpdateBike,DeleteBike} = require("../controllers/bike")

const Schema = require("../models/bike")



/**
 * @swagger
 * components:
 *  schemas:
 *      bike:
 *          type: object
 *          properties:
 *              product_id: 
 *                  type: integer
 *              name:
 *                  type: string
 *              brand:
 *                  type: string
 *              cc:
 *                  type: integer
 *              topspeed:
 *                  type: integer
 *              price:
 *                  type: integer            
 */

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


/**
 * @swagger
 * /api/bike/:
 *   post:
 *     summary: Add a new bike information
 *     requestBody:
 *       required: true
 *       content: 
 *          application/json:
 *              schema:
 *                  $ref: "#components/schemas/bike"
 *     responses:
 *       200:
 *         description: Returns newly added bike Information.
 */
 router.post("/",AddBike)

 /**
 * @swagger
 * /api/bike/:
 *   put:
 *     summary: update bike information
 *     requestBody:
 *       required: true
 *       content: 
 *          application/json:
 *              schema:
 *                  $ref: "#components/schemas/bike"
 *     responses:
 *       200:
 *         description: Returns updated bike Information.
 */
  router.put("/",UpdateBike)

  /**
 * @swagger
 * /api/bike/{product_id}:
 *   delete:
 *     summary: delete bike information
 *     parameters:
 *     - in: path
 *       name: product_id
 *       schema:
 *          type: integer
 *     responses:
 *       200:
 *         description: Returns deleted Information.
 */
 router.delete("/:product_id",DeleteBike)






module.exports = router