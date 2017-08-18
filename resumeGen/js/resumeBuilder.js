var formattedName = HTMLheaderName.replace("%data%", "Alejandro Huerta");
var formattedRole = HTMLheaderRole.replace("%data%", "Computer Science Student");

var bio = {
  "name": "Alejandro Huerta",
  "role": "Computer Science Student",
  "contacts": {
      "mobile":"4423216395",
      "email":"alex.huerta0424@hotmail.com",
      "github":"NeshMx",
      "twitter":"Nesh0424",
      "location":"Querétaro"
  }, 
  "bioPic": "images/me.jpg",
  "welcomeMsg": "Welcome to my web CV!",
  "skills": [
      "awesomeness", "delivery things", "cryogenic sleep"
  ]
};

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);




var work = {
  "jobs": [
    {
      "employer": "GEIQ",
      "title": "Engineering Student",
      "location": "Querétaro",
      "dates": "July 24 - Now",
      "description": "Full Stack Developer"
    },
    {
      "employer": "GEIQ",
      "title": "Lean Challenge Intern",
      "location": "Querétaro",
      "dates": "May 29 - July 21",
      "description": "SSA Lean Challenger"
    }
  ]
};

/* work.jobPosition = "Engineering Student";
work.employer = "GEIQ";
work.yearsWorked = "Current";
work.city = "Querétaro"; */

var education = {
  "schools": [
    {
        "name": "Instituto Tecnológico de Querétaro",
        "city": "Querétaro",
        "degree": "BA"
    },
    {
        "name": "UCO Prepa Contemporánea",
        "city": "Querétaro",
        "degree": "High School"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "TCA Frontend",
      "dates": "July 24 - Current",
      "description": "Currently developing a mockup page for Test Cell Advisor",
      "images": ["images/fry.jpg"]
    }
  ]
};

// education["name"] = "Instituto Tecnológico de Querétaro";
// education["yearsAttended"] = "Current";
// education["city"] = "Querétaro";

function displayWork() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
  
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
  
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDate);
    $(".work-entry:last").append(formattedDescription);
  }
};

function displayEducation() {
  for(school in education.schools) {
    $("#education").append(HTMLschoolStart);
  
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  
    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedCity);
    $(".education-entry:last").append(formattedDegree);
  }
};

displayEducation();

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);


if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

displayWork();

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {  
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
  
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    
    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);        
        $(".project-entry:last").append(formattedImage);        
      }
    }
    
  
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDate);
    $(".project-entry:last").append(formattedDescription);
  }
}

projects.display();

$("#mapDiv").append(googleMap);