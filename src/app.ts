import express, { Application } from "express"
import cors from "cors"
import routes from "./api/routes"
import dbInit from "./db/init"

// console.log(process.env.DB_DRIVER)
const port = 3000

dbInit()

const app: Application = express()

const allowedOrigins = ["http://localhost:5173"]

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1", routes)

try {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
} catch (error) {
  console.log(`Error occured: ${error}`)
}
