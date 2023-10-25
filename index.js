import fs from 'fs/promises'
import Robot from './Robot.js'

let robot = new Robot()
let svg = robot.draw()

fs.writeFile("./output.svg", svg)