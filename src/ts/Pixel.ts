import { Vector2, Vector4 } from "@math.gl/core";

import MathHelper from "./helpers/MathHelper";

import GameScreen from "./screens/GameScreen";

export default class Pixel {
    public pos : Vector2;
    public color : Vector4;
    public colorHex : number;

    public constructor(pos : Vector2, color : Vector4)
    {
        this.pos = pos.multiplyByScalar(GameScreen.SCALE);
        this.color = color;
        this.colorHex = MathHelper.rgba2Hex(color);
    }
}