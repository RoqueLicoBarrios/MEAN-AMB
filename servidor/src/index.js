require('./database')
const app = require('./app')

app.listen(app.get('port'));
console.log ('server on part', app.get('port') )

// 33.33 https://www.youtube.com/watch?v=qf8-JzU-4IE&t=36s&ab_channel=FaztCode