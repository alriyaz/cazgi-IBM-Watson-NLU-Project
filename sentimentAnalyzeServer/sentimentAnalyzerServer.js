const express = require('express');
const app = new express();
const dotenv = require('dotenv');
dotenv.config();


app.use(express.static('client'))

const cors_app = require('cors');
app.use(cors_app());

function getNLUInstance(){
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;

    const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');

    naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: '2020-08-01',
        authenticator: new IamAuthenticator({
            apikey: api_key,
        }),
        serviceUrl: api_url,
    });
    return naturalLanguageUnderstanding;
}

function analyzetext(text,res) {

    let naturalLanguageUnderstanding = getNLUInstance();

    const analyzeParams = {
        'html':text,
        'features': {
            'emotion': {
            },
              'sentiment':{
              }
          }
        };
    naturalLanguageUnderstanding.analyze(analyzeParams)
        .then(analysisResults => {
            res.send(analysisResults.result.sentiment.document);
        }).catch(err => {
        res.send(err.toString());
    });
}
function analyzeurl(url,res) {

    let naturalLanguageUnderstanding = getNLUInstance();

    const analyzeParams = {
        'url':url,
        'features': {
            'emotion': {

            },
              'sentiment':{
              }
            
          }
        };
    naturalLanguageUnderstanding.analyze(analyzeParams)
        .then(analysisResults => {
            res.send(JSON.stringify(analysisResults.result.sentiment.document));
        }).catch(err => {
        res.send(err.toString());
    });
}
function analyzetexte(texte,res) {

    let naturalLanguageUnderstanding = getNLUInstance();

    const analyzeParams = {
        'html':texte,
        'features': {
            'emotion': {
            },
              'sentiment':{
              }
          }
        };
    naturalLanguageUnderstanding.analyze(analyzeParams)
        .then(analysisResults => {
            res.send(analysisResults.result.emotion.document);
        }).catch(err => {
        res.send(err.toString());
    });
}
function analyzeurll(urll,res) {

    let naturalLanguageUnderstanding = getNLUInstance();

    const analyzeParams = {
        'url':urll,
        'features': {
            'emotion': {

            },
              'sentiment':{
              }
            
          }
        };
    naturalLanguageUnderstanding.analyze(analyzeParams)
        .then(analysisResults => {
            res.send(JSON.stringify(analysisResults.result.emotion.document));
        }).catch(err => {
        res.send(err.toString());
    });
}

app.get("/",(req,res)=>{
    res.render('index.html');
  });

app.get("/url/emotion", (req,res) => {

    let urll = req.query.url;
    analyzeurll(urll,res);
});

app.get("/url/sentiment", (req,res) => {
    let url = req.query.url;
    analyzeurl(url,res);
});

app.get("/text/emotion", (req,res) => {
    let texte = req.query.text;
    analyzetexte(texte,res);
  
});

app.get("/text/sentiment", (req,res) => {
    let text = req.query.text;
    analyzetext(text,res);
  
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})