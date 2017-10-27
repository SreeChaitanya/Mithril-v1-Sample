// src/models/User.js
var m = require("mithril")
const { DependencyTest } = require("../dependecy-test");
const { inject } = require('aurelia-framework')

@inject(DependencyTest)
class User{
  constructor(dependencyTest){
    this.list = [];
    this.current ={};
    console.log(dependencyTest)
  }
  loadList(){
    return m.request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users",
        withCredentials: true,
    })
    .then(function(result) {
        this.list = result.data
    })
  }
  load(id){
    return m.request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
        withCredentials: true,
    })
    .then(function(result) {
        this.current = result
    })

  }
  save(){
    return m.request({
        method: "PUT",
        url: "https://rem-rest-api.herokuapp.com/api/users/" + this.current.id,
        data: this.current,
        withCredentials: true,
    })
  }

}

module.exports = User
