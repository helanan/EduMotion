"use strict";

// Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('angry.png');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('img/angry.png');

console.log(storageRef);