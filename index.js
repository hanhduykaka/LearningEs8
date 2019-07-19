const fs = require("fs");

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

const http = require("http");
const fetch = require("node-fetch");
const urlTracby = "http://localhost:5000/api/randomTracby";


const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
console.log('====================================')
//console.log([, city, zipCode])
console.log('====================================')


async function getCleanCodeArticle() {
    try {
        const response = await getData(urlTracby);
        await writeFile("article.html", response);
        console.log("File written");
    } catch (err) {
        console.error(err);

    }
}



async function writeFile(url, response) {
    try {
        console.log(url);
        console.log(response);

    } catch (err) {
        console.error(err);
    }
}

const getData = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
    return json;
    } catch (error) {
      console.log(error);
    }
  };


getCleanCodeArticle();