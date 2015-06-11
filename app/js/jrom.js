

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

var waypoint = new Waypoint({
  element: document.getElementById('unicorn'),
  handler: function(direction) {
    // alert("Hello");
    $("section .unicorn .left span").addClass("animateLeft");
    $("section .unicorn .left").removeClass("spanWrapper");
    $("section .unicorn .right span").addClass("animateRight");
    $("section .unicorn .right").removeClass("spanWrapper");
    this.destroy()
  },
  offset: '75%'
});

var waypoint = new Waypoint({
  element: document.getElementById('projects'),
  handler: function(direction) {
    // alert("Hello");
    this.destroy()
  }
});