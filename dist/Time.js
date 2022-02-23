"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    printTime() {
        console.log(`
            ============================
            Hours: ${this.hours}
            Minutes: ${this.minutes}
            Minutes: ${this.seconds}
            ============================
        `);
    }
    getInSeconds() {
        let total = (this.hours * 60 * 60) + (this.minutes * 60) + this.seconds;
        console.log(total);
    }
}
exports.Time = Time;
