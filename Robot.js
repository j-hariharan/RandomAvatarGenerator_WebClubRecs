import { createSVGWindow } from 'svgdom'
import { SVG, registerWindow } from '@svgdotjs/svg.js'

// returns a window with a document and an svg root node
const window = createSVGWindow()
const document = window.document

registerWindow(window, document)


export default class Robot {
    constructor () {
        this.robot = SVG()

        this.face = {
            w: 70,
            h: 60,
            color: "black"
        }

        this.neck = {
            w: 30,
            h: 10,
            color: "red"
        }

        this.body = {
            w: 150
        }

        // type 0: round
        // type 1: square
        // type 2: line
        // type 3: cross

        this.eyes = {
            type: 0,
            color: "white"
        }
    }

    draw () {
        this.robot = SVG(document.documentElement).size(200, 200)

        let faceTop = 100 - this.face.h
        let faceLeft = (200 - this.face.w)/2
        
        let face = this.robot.rect(this.face.w, this.face.h)
        face.fill(this.face.color)
        face.move(faceLeft, faceTop)

        
        let neckLeft = (200 - this.neck.w)/2
        let neckTop = faceTop + this.face.h
        
        let neck = this.robot.rect(this.neck.w, this.neck.h)
        neck.fill(this.neck.color)
        neck.move(neckLeft, neckTop)


        let bodyLeft = (200 - this.body.w)/2
        let bodyTop = neckTop + this.neck.h
        let bodyHeight = 200 - bodyTop

        let body =  this.robot.rect(this.body.w, bodyHeight)
        body.move(bodyLeft, bodyTop)
        body.fill(this.face.color)


        let eyeLeft = faceLeft + this.face.w/3 - 5
        let eyeRight = faceLeft + 2*this.face.w/3 - 5
        let eyeTop = faceTop + this.face.h/3

        let eye1 = this.robot.circle(10)
        eye1.fill(this.eyes.color)
        eye1.move(eyeLeft, eyeTop)

        let eye2 = this.robot.circle(10)
        eye2.fill(this.eyes.color)
        eye2.move(eyeRight, eyeTop)

        return this.robot.svg()
    }
}