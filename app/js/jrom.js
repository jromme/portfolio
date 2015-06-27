// 'use strict';

//making waypoints
var waypoint = new Waypoint({
  element: document.getElementById('welcome'),
  handler: function(direction) {
    // alert("Hello")
    this.destroy()
  }
});

var waypoint = new Waypoint({
  element: document.getElementById('hobbies'),
  handler: function(direction) {
    // alert("Hobbies");
    this.destroy()
  }
});