let users = JSON.parse(localStorage.getItem("users")) || [
{username:"admin",password:"admin",role:"admin"}
];

let grades = JSON.parse(localStorage.getItem("grades")) || [];

let currentUser = null;

function save(){
localStorage.setItem("users",JSON.stringify(users));
localStorage.setItem("grades",JSON.stringify(grades));
}

function login(){

let u = document.getElementById("username").value;
let p = document.getElementById("password").value;

let user = users.find(x=>x.username===u && x.password===p);

if(user){

currentUser = user;

document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";

document.getElementById("welcome").innerText =
"Bienvenue " + user.username;

showPanels();

}else{
alert("Identifiants incorrects");
}
}

function showPanels(){

document.getElementById("adminPanel").style.display="none";
document.getElementById("profPanel").style.display="none";
document.getElementById("elevePanel").style.display="none";

if(currentUser.role=="admin"){
document.getElementById("adminPanel").style.display="block";
refreshUsers();
}

if(currentUser.role=="prof"){
document.getElementById("profPanel").style.display="block";
}

if(currentUser.role=="eleve"){
document.getElementById("elevePanel").style.display="block";
showGrades();
}

}

function logout(){
location.reload();
}

function createUser(){

let u=document.getElementById("newUser").value;
let p=document.getElementById("newPass").value;
let r=document.getElementById("role").value;

users.push({username:u,password:p,role:r});

save();
refreshUsers();
}

function refreshUsers(){

let list=document.getElementById("userList");
list.innerHTML="";

users.forEach(u=>{
let li=document.createElement("li");
li.innerText = u.username + " ("+u.role+")";
list.appendChild(li);
});

}

function addGrade(){

let student=document.getElementById("student").value;
let subject=document.getElementById("subject").value;
let grade=document.getElementById("grade").value;

grades.push({
student:student,
subject:subject,
grade:grade
});

save();

alert("Note ajoutée");

}

function showGrades(){

let list=document.getElementById("grades");
list.innerHTML="";

grades
.filter(g=>g.student===currentUser.username)
.forEach(g=>{

let li=document.createElement("li");

li.innerText =
g.subject + " : " + g.grade;

list.appendChild(li);

});

}
