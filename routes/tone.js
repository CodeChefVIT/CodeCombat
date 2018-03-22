const router = require('express').Router();
const toneAnalyzer = require("watson-developer-cloud/tone-analyzer/v3");
const toneobj = require('../secret').t_analyser;

router.post('/',(req,res,next)=>{


    var tone_analyzer = new toneAnalyzer(toneobj);

    var params = {
      'tone_input': req.body.text,
      'content_type': 'text/plain'
    };


    tone_analyzer.tone(params,(err,response)=>{
        if(err) res.json({err});
        else res.json(JSON.stringify(response,null,2));
    });

});
