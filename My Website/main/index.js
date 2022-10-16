// var i = 2;
// let name = "Ben";

// i= 65;


// //writing document
// document.writeln(i)
// //alert("fuck world" + i);


let hasJob = true;  // true/false is a boolean
if (hasJob) {
    // i have a job
showMessage("Thanks for visitin, i'm employed");

} 
else {
    //i need a job  
    showMessage("im looking a job");
} 




let today = new Date("10/09/2022");   //data storing month, year, time,etc
//let today = new Date("10/09/2022");
let dayofWeek = today.getDay("");
if (dayofWeek === 0 || dayofWeek === 6)        
 {document.writeln("plz be patient as today is weekend");}
// && is for and || is for or 

/////////////////////////////////////////////////////////////

function showMessage(message) //function is to do certain things, messsage is a variable
{
    // putting const (below) in fucntion is PRIVATE
   const formInfo = document.getElementById("formInfo");
   formInfo.innerHTML = "<p>" + message + "</p>";
   
   document.writeln("<p>" + message + "</p>");
   document.writeln("<hr />");
}


//DOM
// window.document //normally just document
// document.body  //get the body element
// document.head  //head element
// document.getElementById()   
// document.getElementsByClassName()


// public// const formInfo = document.getElementById("formInfo");
function clearMessage() {
    
    formInfo.innerHTML = ""; 
}


///////////////////////////////////////////////////////////

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit",     function(event){
                            //event//   
    event.preventDefault();
    showMessage("Please wait, sending");
});



const experiences  =  document.getElementsByClassName("experience");
//for to walk through collection  //x will cycle, if lower than experience, 
//x will increment
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x]  // look for a number of items in collection
    item.addEventListener("mouseenter", function(event){
        event.target.style = "background-color: #999999;";
    });
    
    item.addEventListener("mouseleave", function(event){
        event.target.style = "";
    });
}


