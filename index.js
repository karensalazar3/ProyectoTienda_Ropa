const express = require ("express")
const app = express()
const PORT = 3000

app.use(express.json()) //Para que el req.body no sea undefine

app.use("/users",require("./routes/users"))

app.listen(PORT,()=>console.log("servidor levantado en el puerto"+ PORT))