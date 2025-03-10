import express from "express"
import dot from "dotenv"
import { productosRouter } from "./routers/index.ts"

dot.config({path: "/home/taller4O/productos/src/.env"})

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hola UNACH!')
  })

app.use("/productos", productosRouter)
  
app.listen(port, () => {
console.log(`Puerto escuchado en: ${port}`)
})