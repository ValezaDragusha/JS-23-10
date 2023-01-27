var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Paraqitja e kohës aktuale në webpage
var showCurrentTime = function()
{
    // Paraqitja e string-ut në webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Caktimi i orëve
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Caktimi i minutave
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Caktimi i sekondave
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // Bashkoni string-un që paraqet kohën
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Programimi i orës që të rrit vlerën e kohës dhe ndërrimi i fotografive dhe mesazheve vetvetiu 
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://img.freepik.com/premium-vector/tea-party-tea-time-teapot-with-cup_456984-50.jpg?w=740";

  var timeEventJS = document.getElementById("timeEvent");
  var Image = document.getElementById('Image');
  
  if (time == partytime)
  {
    image = "https://as2.ftcdn.net/v2/jpg/02/11/79/03/1000_F_211790352_1DEW4SDQ85cXj9UMy3HGAeYxd0Kspb6h.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://www.prudential.co.th/export/sites/default/prudential-th/th/.galleries/images/4-secrets-to-waking-up-early-easily-even-if-you-stay-up-late-PC.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://assets.sweat.com/html_body_blocks/images/000/006/886/original/What_It_Means_When_You_Always_Eat_Lunch_Early_enefa72e6e22ff4ec8de555a6672c038bd.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://www.shutterstock.com/image-vector/sweet-dreams-banner-happy-young-600w-2063860994.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://wallpapercave.com/wp/wp7056935.jpg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://img.freepik.com/premium-vector/tea-party-tea-time-teapot-with-cup_456984-50.jpg?w=740";
    messageText = "Good afternoon!";
  }

  //console.log(messageText); 
  timeEventJS.innerText = messageText;
  Image.src = image;
  
  showCurrentTime();
};
updateClock();

// Programimi i orës që të rrit kohën për sekond
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Rregullimi i butonit që të jetë funksional
var partyTimeButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyTimeButton.addEventListener("click", partyEvent);
partyEvent(); 


// Aktivizon selektorin Wake-Up
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Aktivizon selektorin LunchTime
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Aktivizon selektorin Nap-Time 
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);