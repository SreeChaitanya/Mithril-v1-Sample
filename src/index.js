// src/index.js
var m = require("mithril")
const { Container} = require('aurelia-dependency-injection')
const { DependencyTest } = require('./dependecy-test')

var UserList = require("./views/UserList")
var UserForm = require("./views/UserForm")
const container = new Container();

container.registerInstance(DependencyTest, new DependencyTest());

console.log('registered')

m.route(document.body, "/list", {
    "/list": UserList,
    "/edit/:id": UserForm,
})
