import { isThrowStatement } from "typescript";
import C2D from "../helpers/C2D";

export default abstract class Canvas {
    protected width : number;
    protected height : number;
    
    public constructor(width : number, height : number) {
        this.width = width;
        this.height = height;
    }

    protected getInstance() : C2D
    {
        const canvas : HTMLCanvasElement = document.querySelector("#game") as HTMLCanvasElement;
        canvas.width = this.width;
        canvas.height = this.height;

        const context : C2D = canvas.getContext('2d') as C2D;
        if (context === null) throw "Your browser don't support canvas :(";
 
        return context;
    }

    protected lockMousePointer() : void
    {
        const canvas : HTMLCanvasElement = this.getInstance().canvas; 

        document.onclick = (e : MouseEvent) => canvas.requestPointerLock();
    }

    public static sleep(delay : number) : void
    {
        const start : number = new Date().getTime();
        while(new Date().getTime() < start + delay);
    }
}