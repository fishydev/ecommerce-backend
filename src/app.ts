import express, { Application, NextFunction, Request, Response } from "express"
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

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  if (err.code && err.message) {
    res.status(err.code).send(err.message)
  } else {
    res.status(500)
    res.send("Oops, something went wrong.")
  }
})

try {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
} catch (error) {
  console.log(`Error occured: ${error}`)
}
