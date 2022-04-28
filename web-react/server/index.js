const mongoose = require("mongoose"); // importo mongoose
const app = require("./app"); // importo fichero app con configuraciones 
const PORT_SERVER = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require('./config'); // importo la version de la api

// descomentar por error - solucion a error useFindAndModify
// mongoose.set("useFindAndModify", false);

// mongoose.connect('mongodb://localhost:27017/test');

mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/leandrodb`,
{useNewUrlParser: true, useUnifiedTopology: true }, (err, res) =>{
    if (err) {
        throw err;
    } else {
        console.log("La conexion a la base de datos es correcta.");

        app.listen(PORT_SERVER, () => {
            console.log("##################");
            console.log("#### API REST ####");
            console.log("##################");
            console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
        })
    }
});


