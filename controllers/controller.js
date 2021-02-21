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
    .catch((err) => res.send({ error: { message: err.errors[0].message } }));
};

const generateToken = (email) => "qwerty" + email + "qwerty";
const generateRefreshToken = (email) => "qwerty" + email;

exports.signInUser = (req, res, next) => {
  if (!validateRequest(req))
    return res.send({ error: { message: "Invalid API_KEY" } });
  const body = req.body;
  User.findOne({ where: { email: body.email } })
    .then((user) => {
      if (user.password != body.password) {
        res.send({ error: { message: "Invalid Credentials" } });
        return null;
      }
      return user;
    })
    .then((user) => {
      if (user) {
        return user.update({
          tokenId: generateToken(user.email),
          refreshToken: generateRefreshToken(user.email),
        });
      }
    })
    .then((user) =>
      res.send({
        userId: user.id,
        email: user.email,
        tokenId: user.tokenId,
        refreshToken: user.refreshToken,
      })
    )
    .catch((err) => console.error(err));
};
