const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = express();

//Connection URl
const uri = "mongodb+srv://login:login@loginapp.wxdyv.mongodb.net/logindata?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
const db = client.db("logindata");
client.connect
db.collection('logindata').insertOne({
  item: "canvas",
  qty: 100,
  tags: ["cotton"],
  size: { h: 28, w: 35.5, uom: "cm" }
})
.then(function(result) {
  console.log('success');
}) });
