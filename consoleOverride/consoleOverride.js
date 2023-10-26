const originalLog = console.log;
console.log = function (data) {
    if (typeof data ==="object"){
        data = JSON.stringify(data, null, 8);
    }
    // call the original console.log with the formatted data
    originalLog(data);
};