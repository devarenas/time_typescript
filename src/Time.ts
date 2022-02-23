export class Time {
    hours: number;
    minutes: number;
    seconds: number;
    
    
    constructor(
        hours: number,
        minutes: number,
        seconds: number
        
    ){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    printTime(){
        console.log(`
            ============================
            Hours: ${this.hours}
            Minutes: ${this.minutes}
            Minutes: ${this.seconds}
            ============================
        `)
    }

    getInSeconds(){
        let total = (this.hours *60*60)+(this.minutes *60) + this.seconds
        console.log(total)
        
    }
}