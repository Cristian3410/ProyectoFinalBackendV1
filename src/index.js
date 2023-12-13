import app from "./app.js";
import {PORT} from "./configV2.js"


app.listen(PORT);
console.log(`escuchando en el puerto ${PORT}`);