/**
@description Complete Bio Section of Online Resume
*/
var bio = {
  "name" : "Kristin Mihara",
  "role" : "QA Associate",
  "contacts" : {
    "mobile": "(310) 888-8888",
    "email" : "kristin@gmail.com",
    "github" : "kristinmihara",
    "location" : "Los Angeles,CA",
    "linkedin" : "kristindaniellemihara"
  },
  "welcomeMessage" : "Hello! My name is Kristin and welcome to my page!",
  "skills" : [
    "awesomeness", "leadership", "communication", "techsavy"
  ],
  "biopic" : "images/profileimage.jpg"
}

/**
@description Complete Work Section of Online Resume
*/
var work = {
  "jobs": [
    {
      "title": "QA Associate",
      "dates": "October 2015 - Present",
      "location": "Culver City, CA",
      "employer": "The Famous Group",
      "description": "I am currently a software tester and beginning producer" +
      " at the Famous Group.  I test our 3D social media software platform" +
      " that takes in posts from twitter and instagram and puts them into" +
      " our awesome 3D animations.  In addition to testing, I also correspond" +
      " with clients to ensure they are up to date with the latest build.",
      "years": "10 Months"
    },
    {
      "title": "Barista",
      "dates": "July 2014 - July 2015",
      "location": "Pomona, CA",
      "employer": "Starbucks",
      "description": "At Starbucks, I was in charge of cashier services and" +
      " filling customer orders.  Time management was a huge part of making" +
      " sure people's orders were filled in the right order and for only the" +
      " minimal amount of wait time.",
      "years": "1 Year"
    }
  ]
};

/**
@description Complete Projects Section of Online Resume
*/
var projects ={
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "October 2015 - Infinity",
      "description": "This is the first project woo! This is the sample" +
      " project with this sample description for the sample title.",
      "images": [
        "images/fry.jpg", "images/fry.jpg"
      ]

    }
  ]
};

/**
@description Complete Education Section of Online Resume
*/
var education = {
  "schools" : [
    {
      "name": "California State Polytechnic University, Pomona",
      "location": "Pomona, CA",
      "degree": "BA",
      "dates": "2015",
      "majors": ["Computer Engineering"],
      "url": "http://cpp.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Udacity Front End Class",
      "school": "Udactiy",
      "dates": "July 2016 - Present",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
}

//TODO: Add Bio Information
bio.display = function(){
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWM = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLinkedIn);
  $("#topContacts").append(formattedLocation);
  $("#header").append(formattedWM);
  $("#header").append(formattedbioPic);
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedLinkedIn);
  $("#footerContacts").append(formattedLocation);

  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
}
bio.display();

//TODO: Add Work Experience
work.display = function(){
  $("#workExperience").append(HTMLworkStart);

    work.jobs.forEach(function(job) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);

      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      $(".work-entry:last").append(formattedDates);

      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      $(".work-entry:last").append(formattedDescription);
    });
}
work.display();

//TODO: Add Projects
projects.display = function() {
  $("#projects").append(HTMLprojectStart);

  projects.projects.forEach(function(project){

    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry").append(formattedprojectTitle);

    var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry").append(formattedprojectDates);

    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry").append(formattedprojectDescription);

    for (var i = 0; i < project.images.length; i++){
      var formattedprojectImage = HTMLprojectImage.replace("%data%", project.images[i]);
      $(".project-entry:last").append(formattedprojectImage);
    }

  });
}
projects.display();

//Add Education Information
education.display = function(){
  $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(school){

      var formattedschoolName = HTMLschoolName.replace("%data%", school.name);

      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

      var formattedschoolTitle = formattedschoolName + formattedschoolDegree;
      $(".education-entry").append(formattedschoolTitle);

      var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
      $(".education-entry").append(formattedschoolDates);

      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
      $(".education-entry").append(formattedschoolLocation);

      var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
      $(".education-entry").append(formattedschoolMajor);

    });

  $('.education-entry').append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse){

      var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);

      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);

      var formattedonlineName = formattedonlineTitle + formattedonlineSchool;
      $(".education-entry").append(formattedonlineName);

      var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
      $(".education-entry").append(formattedonlineDates);

      var formattedonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
      $(".education-entry").append(formattedonlineURL);
  });
}
education.display();

//Enable Click Logs
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

//Enable International Name View
function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];

}
$('#main').append(internationalizeButton);

//Enable Google Maps
$("#mapDiv").append(googleMap);
