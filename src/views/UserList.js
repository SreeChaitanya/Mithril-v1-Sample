// src/views/UserList.js
var m = require("mithril")
// const { User } = require("../models/User")
var { inject } = require('aurelia-dependency-injection')
const { DependencyTest } = require('../dependecy-test')

//@inject(DependencyTest)

// var m = require("mithril")
var User = require("../models/User")

//@inject(DependencyTest)
class UserListComponent{
  static inject() { return [DependencyTest]; }
  constructor(dependencyTest) {
        //this.User = user
        console.log(dependencyTest)
  }
  oninit(){
     this.User.loadList()
  }
  view(){
    return m(".user-list", User.list.map(function(user) {
        return m("a.user-list-item", {href: "/edit/" + user.id, oncreate: m.route.link}, user.firstName + " " + user.lastName)
    }))
  }
}
module.exports = UserListComponent
