function CustomConsole(history){
    this.histori = history + `: `;
    this.log = function(...addon){
        console.log(addon)
        this.addon = JSON.stringify(addon)
        return this.histori  + this.addon
    };
    this.clearHistory = function(){
        this.histori = ``
        return this.histori
    }
    this.historY = function(){
        return this.histori
    }
}

const myConsole = new CustomConsole('Regular');
myConsole.clearHistory()
console.log(myConsole.log("ok : ", 1, 2, 3));