const express = require('express');
const urlMetadata = require('url-metadata')

const app = express();

app.use(express.json());

app.post('/scrap', (req, res) => {

    urlMetadata(req.body.url).then(
        function (metadata) { 
            res.send(metadata);
        },
        function (error) { 
            res.status(400).send(error);
        })
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`server is setup and listening on port ${port}`));