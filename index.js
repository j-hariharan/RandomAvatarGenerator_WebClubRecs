import express from 'express'

import fs from 'fs/promises'
import Robot from './Robot.js'


const app = express()
const port = 3000

app.get('/', (req, res) => {
    let seed = req.query.seed

	let robot = new Robot(seed)
	let svg = robot.draw()

    res.set("Content-Type", "image/svg+xml")
    res.send(Buffer.from(svg))
})

app.listen(port, () => {
    console.log("App listening!")
  })