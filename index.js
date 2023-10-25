import express from 'express'
import convertor from 'convert-svg-to-png'
import Robot from './Robot.js'


const app = express()
const port = 3000

app.use(express.static("static"))

app.get('/generate', async (req, res) => {
    let seed = req.query.seed
    let type = req.query.type

	let robot = new Robot(seed)
	let svg = robot.draw()

    if (type == "png") {
        res.set("Content-type", "image/png")

        let buffer = await convertor.convert(svg)
        res.send(buffer)
    } 
    
    else {
        res.set("Content-Type", "image/svg+xml")
        res.send(Buffer.from(svg))
    }
})

app.listen(port, () => {
    console.log("App listening!")
  })