import kaboom from "kaboom";
import { scale } from "./constants";

export const k = kaboom({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById("game"),
});