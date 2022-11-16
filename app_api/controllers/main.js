const mongoose = require('mongoose');
const Account = mongoose.model('Account');

const home = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});};


const login = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});};

const loginSubmit = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});};


const admin = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});};

const adminRegister = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});};

module.exports = {
  home,
  login,
  loginSubmit,
  admin,
  adminRegister
};