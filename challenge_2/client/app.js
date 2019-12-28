var newStr = '';
var convertToCSV = function (obj) {
    var recievedObj = JSON.parse(Object.values(obj));
    var values = Object.values(recievedObj)

    var arrKeys = Object.keys(recievedObj);
    arrKeys.pop();
    
    
    for (var i = 0; i < arrKeys.length; i++) {
        newStr += arrKeys[i] + ', ';
        if (i === arrKeys.length - 1) {
            newStr += '\n';
        }
    }

    for (var i = 0; i < values.length; i++) {
        if (typeof values[i] === 'object') {
            // TODO: Call a function
        }

        newStr += values[i] + ', '; 
        if (i === values.length - 1) {
            newStr += '\n';
        }
    }
}