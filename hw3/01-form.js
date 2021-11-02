// Enter your code here
document.getElementById("form").addEventListener("submit",SubmitForm);
function SubmitForm(event){
    event.preventDefault();
    var Name = document.getElementById("name").value;
    
	var Email = document.getElementById("email").value;
   
    const option=document.getElementById("option").value;
    const section=document.querySelectorAll('input[name="radio-choice"]');
    let sec="no selection";
    let comments="no feedback";
    const courses=document.querySelectorAll('input[name="course"]:checked');
    let c=[];
    courses.forEach((ch)=>{
        c.push(ch.value);
    });
    let programList="none of the courses";
    if(c.length>0){
        programList="";
        c.forEach((ch2)=>{
            programList+=ch2;
            programList+=", ";
        });
    }
    const fd=document.getElementById("Anything else?").value;
    if(fd.length>0){
        comments=fd;
    }
    for(const choice of section){
        if(choice.checked){
            sec=choice.value;
            break;
        }
    }
    console.log("Name : " + Name);
    console.log("Email : " + Email);
    console.log("Class Registration: ",option);
    console.log("Class Section: ",sec);
    console.log("Courses Taken: ",programList);
    console.log("Feedback: ",comments);
}
    // console.log("Class Registration : " + RegistrationStatus);
    // var courses = document.getElementsByName("course");
    // var courseSelected;

    // for(var i = 0; i <courses.length; i++) {
    //     if(courses[i].checked){
    //         courseSelected = courses[i].value;
    //     }
    //     else{
    //         courseSelected = "";
    //     }
    // }
    // console.log("Class Section: "+courseSelected);
    
    // var checkbox = document.querySelectorAll('input[type=checkbox]:checked')
    // var list="";
    // for (var i = 0; i < checkbox.length; i++) {

    //     if(i == checkbox.length-1){
    //         list += checkbox[i].value;
    //     }
    //     else{
    //         list += checkbox[i].value + ",";
    //     }     
    // }
  
    // console.log("Courses: " +list);
    // console.log("Comments: " +document.getElementById("anything").value);  
  


