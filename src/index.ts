import express,{ Express, Request, Response } from "express"
import { config } from "dotenv"
import cors from "cors"
import { connectDb } from "./utils/db"
import bookRouter from "./routes/bookRoute"
import routes from "./routes"

const app:Express = express()
config()
const port = process.env.PORT || 5000

// DB connection 
connectDb()


// Middleware
app.use(cors({
    origin : process.env.HOST_URL || "*"
    
}))
app.use(express.json())

// app.use("/api",bookRouter)
app.use("/api", routes)


// GET, POST, PUT, DELETE, PATCH 
//Basic API endpoint
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
    res.json({success:true, message : "helloworld"})
})


app.listen(port,() => console.log(`server running on port ${port}`))



