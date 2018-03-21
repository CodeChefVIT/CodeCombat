const router = require('express').Router();
const request = require('request');
const fs = require('fs');
const vision = require('@google-cloud/vision');
const shell  = require("shelljs");

//creates a client
const client = new vision.ImageAnnotatorClient();


// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}







router.post('/',(req,res,next)=>{

    if(!req.file){
        var err = new Error('error');
        next(err);
    }

    var req = {
      "requests": [
        {
          "image": {
            "content": base64_encode(req.file.path)
          },
          "features": [
            {
              "type": "TEXT_DETECTION"
            }
          ]
        }
      ]
    }

    // Performs text detection on the local file
    client
      .textDetection(fileName)
      .then(results => {
        const detections = results[0].textAnnotations;
        var text = '';
        detections.forEach((text) => {

            //console.log(JSON.stringify(text));
            text+=text.description;

        });
        shell.rm(req.file.path);
        res.json({text})
      })
      .catch(err => {
        next(err);
      });




});
