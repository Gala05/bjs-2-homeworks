class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;        
    }

    addClock(time, callback){
        let object = { time, callback, canCall: true};
        if (!time || !callback){
            throw new Error ("Отсутствуют обязательные аргументы");
        }
        if (this.alarmCollection.some(t => t.time === time)) {
            console.warn("Уже присутствует звонок на это же время")
        } 
        this.alarmCollection.push(object);		
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime(){
        const now = new Date();
        const hour = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, "0");
        return `${hour}:${minutes}`;
    }

    start(){
        if(this.intervalId !== null) {
            return undefined;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(item => {
                if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
                    item.canCall = false;
                    item.callback();
                }                
            })
        }, 1000);
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach(item => {
            item.canCall = true;
        })
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}