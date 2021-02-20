const express = require("express");

const API_KEY = require("../secrets/api-keys");

const validateRequest = (req, res, next) => req.query.key == API_KEY;

exports.createUser = (req, res, next) => {
  if (!validateRequest(req))
    return res.send({ error: { message: "Invalid API_KEY" } });
  const body = req.body;
};

exports.signInUser = (req, res, next) => {
  if (!validateRequest(req))
    return res.send({ error: { message: "Invalid API_KEY" } });
  const body = req.body;
};
