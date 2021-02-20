const express = require("express");

const API_KEY = require("../secrets/api-keys");
const User = require("../models/user");

const validateRequest = (req, res, next) => req.query.key == API_KEY;
exports.createUser = (req, res, next) => {
  if (!validateRequest(req))
    return res.send({ error: { message: "Invalid API_KEY" } });
  const body = req.body;
  User.create({ email: body.email, password: body.password })
    .then(() => {
      res.send({ status: "success" });
    })
    .catch((err) => console.error(err));
};

exports.signInUser = (req, res, next) => {
  if (!validateRequest(req))
    return res.send({ error: { message: "Invalid API_KEY" } });
  const body = req.body;
  User.findAll({ where: { email: body.email } })
    .then((users) => {
      const user = users[0];
      if (user.password != body.password)
        return res.send({ error: { message: "Invalid Credentials" } });
      res.send({ status: "success" });
    })
    .catch((err) => console.error(err));
};
