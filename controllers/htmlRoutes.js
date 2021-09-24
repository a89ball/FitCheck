const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

app.get('/', (req, res) => { res.render("main") });
app.get('/login', (req, res) => { res.render("login") });
app.get('/signup', (req, res) => { res.render("signup") });
app.get('/aboutUs', (req, res) => { res.render("aboutUs") });
app.get('/dashboard', (req, res) => { res.render("dashboard"); 