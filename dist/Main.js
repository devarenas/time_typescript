"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Time_1 = require("./Time");
class Main {
    start() {
        const t = new Time_1.Time(10, 45, 1);
        t.printTime();
        t.getInSeconds();
    }
}
exports.Main = Main;
