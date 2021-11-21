const express = require("express")
const router = express.Router()

const {GetAllHome,GetHomesByFilter,AddHome,UpdateHome,DeleteHome}= require("../controllers/home")

const Schema = require("../models/home")

/**
 * @swagger
 * components:
 *  schemas:
 *      home:
 *          type: object
 *          properties:
 *              product_id: 
 *                  type: integer
 *              ownerName:
 *                  type: string
 *              sqfeet:
 *                  type: integer
 *              beds:
 *                  type: integer
 *              bath:
 *                  type: integer
 *              price:
 *                  type: integer
 *              place:
 *                  type: string  
 *              contactNumber:
 *                  type: integer            
 */


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


/**
 * @swagger
 * /api/home/:
 *   post:
 *     summary: Add a new home information
 *     requestBody:
 *       required: true
 *       content: 
 *          application/json:
 *              schema:
 *                  $ref: "#components/schemas/home"
 *     responses:
 *       200:
 *         description: Returns newly added home Information.
 */
 router.post("/",AddHome)

 /**
 * @swagger
 * /api/home/:
 *   put:
 *     summary: update home information
 *     requestBody:
 *       required: true
 *       content: 
 *          application/json:
 *              schema:
 *                  $ref: "#components/schemas/home"
 *     responses:
 *       200:
 *         description: Returns updated home Information.
 */
  router.put("/",UpdateHome)

  /**
 * @swagger
 * /api/home/{product_id}:
 *   delete:
 *     summary: delete home information
 *     parameters:
 *     - in: path
 *       name: product_id
 *       schema:
 *          type: integer
 *     responses:
 *       200:
 *         description: Returns deleted Information.
 */
 router.delete("/:product_id",DeleteHome)








module.exports = router