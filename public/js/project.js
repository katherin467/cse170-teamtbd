//var classes = require("../../classdata.json")['classes'];

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// probably don't need anything yet
    console.log("boom baby");
	$.getScript("https://www.youtube.com/iframe_api", function() {
		onYouTubeIframeAPIReady();
	});
	$('.loginbtn').click(verifyLogin);
	$('.addClassBtn').click(addClass);
}

function verifyLogin(e) {
	e.preventDefault();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "testUser" && password == "testPass") {
		window.location += "home";
	} else {
		alert("Invalid login!")
	}
}

function addClass(e) {
	var coursename = document.getElementById("className").value;
	var coursedes = document.getElementById("classDes").value;
	var newClass = {
		'id': length(classes),
		'course': coursename,
		'title': coursedes,
		'tasks': []
	}
	classes.push(newClass)
	console.log(newClass)
}

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

//================= FUNCTIONS OF VIDEO LECTURE =================

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
	window.YT.ready(function () {
	player = new YT.Player('player', {
	height: '390',
	width: '640',
	videoId: 'gJQTFhkhwPA',
	events: {
		'onReady': onPlayerReady,
		'onStateChange': onPlayerStateChange
	}
	});	
});

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.playVideo();
}

function onPlayerStateChange(event) {
    var videoStatuses = Object.entries(window.YT.PlayerState)
    console.log(videoStatuses.find(status => status[1] === event.data)[0])
  }
}

function getCurTime() {
	//right now its an alert but it should give it to timestamps
	var timestamp = Math.round(player.playerInfo.currentTime);
	$("#example #notes-table").append("<tr> <td>" + timestamp + 
						" sec.</td> <td> <input type='text' id='note'> </tr>");
	/* $("#example #notes-table").append("<td>" + timestamp + "</td>");
	$("#example #notes-table").append("<td><input type='text' id='note'> </td>"); */
	console.log("clicked on " + timestamp);
}

function getCurTimeQ() {
	//right now its an alert but it should give it to timestamps
	var timestamp = Math.round(player.playerInfo.currentTime);
	$("#example #questions-table").append(" <tr> <td>" + timestamp + 
						" sec.</td> <td> <input type='text' id='note'> </tr>");
	/* $("#example #notes-table").append("<td>" + timestamp + "</td>");
	$("#example #notes-table").append("<td><input type='text' id='note'> </td>"); */
	console.log("clicked on " + timestamp);
}

function setCurTime(time) {
	preventDefault(e);
	loadVideoById({'videoId': 'gJQTFhkhwPA',
               'startSeconds': time
				});
}


