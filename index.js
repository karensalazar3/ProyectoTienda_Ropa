const express = require ("express")
const app = express()
const PORT = 3000

app.use(express.json()) //Para que el req.body no sea undefine

app.use("/users",require("./routes/users"))
app.use("/category",require("./routes/Categories"))

app.listen(PORT,()=>console.log("servidor levantado en el puerto"+ PORT))