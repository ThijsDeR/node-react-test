const { createClient } = require('@supabase/supabase-js');
const express = require('express');
require('dotenv').config()

const SUPABASE_URL = "https://kupqbyvenqpinztukroy.supabase.co"
const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const app = express();

app.get("/api", (req, res) => {
    res.json({"test": "test"})
})

app.get("/insertTest", async (req, res) => {
    const newData = await supabase.from('test').insert(
        [
            {name: 'Thijs', age: 4, score: 100},
            {name: 'Thijs1', age: 6, score: 103142},
            {name: 'Thijs2', age: 1, score: 1004312},
            {name: 'Thijs3', age: 546, score: 1053104},
            {name: 'Thijs4', age: 123, score: 1235100},
            {name: 'Thijs5', age: 12, score: 12311300}
        ]
    )
    res.json({"data": newData})
})

app.get("/deleteTest", async(req, res) => {
    const newData = await supabase.from('test').delete().match({"id": "1"})
    res.json({"data": newData})
})  

app.get("/test", async (req, res) => {
    const data = await supabase.from('test').select()
    res.json({"data": data})
})

app.get("/new", async (req, res) => {
    const data = await supabase.from('test').select()
    res.json({"data": data})
})

app.listen(5000, () => {
    console.log("listening on 5000")
})

