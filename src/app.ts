import express, { Application } from "express"
import routes from "./api/routes"
import dbInit from "./db/init"

// console.log(process.env.DB_DRIVER)
const port = 3000

dbInit()

const app: Application = express()

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
