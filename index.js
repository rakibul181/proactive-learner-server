const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
app.use(cors())

const courses = require('./courses.json')

app.get('/', (req, res) => {
    res.send('Courses Api Is Running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    id = req.params.id
    const selectedCourse = courses.find(course => course.id === id)
    console.log(selectedCourse);
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('Courses Server is RUnning');
})