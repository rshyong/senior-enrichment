'use strict'
const api = require('express').Router();
const db = require('../db');
const Campuses = require('../db/models/campuses.js');
const Students = require('../db/models/students.js');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}));

api.get('/campus', (req, res, next) => {
	return Campuses.findAll()
	.then(campuses => res.json(campuses))
	.catch(next);
});

api.get('/campus/:campusName', (req, res, next) => {
	return Campuses.find({
		where: {
			name: req.params.campusName[0].toUpperCase() + req.params.campusName.slice(1)
		}
	})
	.then(campus => {
		res.json(campus.id);
	})
	.catch(next);
});

api.post('/campus', (req, res, next) => {
	return Campuses.create(req.body)
	.then((campus)=> {
		res.status(201).json(campus);
	})
	.catch(next);
});

api.get('/students', (req, res, next) => {
	return Students.findAll()
	.then(students => res.json(students))
	.catch(next);
});

api.post('/students', (req, res, next) => {
	return Students.create(req.body)
	.then(student => res.status(201).json(student))
	.catch(next);
});

module.exports = api