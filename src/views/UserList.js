// src/views/UserList.js
var m = require("mithril")
var User = require("../models/User")

class UserListComponent{
  constructor(vnode) {
        // vnode.state is undefined at this point
        this.kind = "ES6 class"
  }
  oninit(){
     User.loadList()
  }
  view(){
    return m(".user-list", User.list.map(function(user) {
        return m("a.user-list-item", {href: "/edit/" + user.id, oncreate: m.route.link}, user.firstName + " " + user.lastName)
    }))
  }
}
module.exports = UserListComponent
