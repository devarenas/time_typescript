import { Time } from './Time';

export class Main {

    start(){

        const t = new Time(10,45,1);
        t.printTime();
        t.getInSeconds();
    }
}