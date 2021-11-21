const express = require("express")
const router = express.Router()

const {GetAllDress,GetDressByFilter,AddDress,UpdateDress,DeleteDress} = require("../controllers/dress")

const Schema = require("../models/dress")

/**
 * @swagger
 * components:
 *  schemas:
 *      dress:
 *          type: object
 *          properties:
 *              product_id: 
 *                  type: integer
 *              name:
 *                  type: string
 *              size:
 *                  type: string
 *              colour:
 *                  type: string
 *              sex:
 *                  type: string
 *              price:
 *                  type: integer
 *              stocks:
 *                  type: integer              
 */



/**
 * @swagger
 * /api/dress/:
 *   get:
 *     description: Get all the dress information
 *     responses:
 *       200:
 *         description: Returns dress Information.
 */
router.route("/").get(GetAllDress)

/**
* @swagger
* /api/dress/query/:
*   get:
*     description: Get dress using filters
*     parameters:
*      - in: query
*        name: price
*        schema:
*           type: integer
*        description: Return list of dress by price
*      - in: query
*        name: sex
*        schema:
*           type: string
*        description: Return list of dress by sex  
*     responses:
*       200:
*         description: Returns dress using filters.
*/
router.route("/query/").get(GetDressByFilter)

/**
 * @swagger
 * /api/dress/:
 *   post:
 *     summary: Add a new dress information
 *     requestBody:
 *       required: true
 *       content: 
 *          application/json:
 *              schema:
 *                  $ref: "#components/schemas/dress"
 *     responses:
 *       200:
 *         description: Returns newly added dress Information.
 */
 router.post("/",AddDress)

 /**
 * @swagger
 * /api/dress/:
 *   put:
 *     summary: update dress information
 *     requestBody:
 *       required: true
 *       content: 
 *          application/json:
 *              schema:
 *                  $ref: "#components/schemas/dress"
 *     responses:
 *       200:
 *         description: Returns updated dress Information.
 */
  router.put("/",UpdateDress)

  /**
 * @swagger
 * /api/dress/{product_id}:
 *   delete:
 *     summary: delete dress information
 *     parameters:
 *     - in: path
 *       name: product_id
 *       schema:
 *          type: integer
 *     responses:
 *       200:
 *         description: Returns deleted Information.
 */
 router.delete("/:product_id",DeleteDress)




module.exports = router