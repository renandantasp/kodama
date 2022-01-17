import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', (req, res) => {
  res.send('Hosme')
})

app.use('*', (req, res) => {
  res.status(404).json({error: "Not found"})
})

export default app