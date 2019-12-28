const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(express.static('client'))
app.use(bodyParser())


app.get('/', function (req, res) {
    res.render('index', {});
});

app.post('/home', (req, res, next) => {
    var recievedObj = JSON.parse(Object.values(req.body));
    // console.log(recievedObj);
    var values = Object.values(recievedObj)

    var objKeys = Object.keys(recievedObj);
    objKeys.pop();
    var newStr = '';
    for (var i = 0; i < values.length; i++) {
        if (typeof values[i] === 'object') {
            newStr += '\n'
            for (var key in values[i]) {
                if (typeof values[i][key] === 'object') {
                    for (var element in values[i][key]) {
                        if (typeof values[i][key][element] === 'object') {
                            for (var obj in values[i][key][element]) {
                                newStr += values[i][key][element][obj] + ', ';
                            }
                        }
                        console.log(element)
                        newStr += values[i][key][element] + ', ';
                    }
                    newStr += '\n';
                }
            }
        }
        newStr += values[i] + ', ';
    }
    console.log(newStr)
    
    
    // res.end(JSON.stringify(array));
})


app.listen(port, () => {
    console.log(`CSV Report Generator listening on Port ${port}`)
})
