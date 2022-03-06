let maleAkanName={
    Sunday: "Kwasi",
    Monday: "Kwadwo",
    Tuesday: "Kwabena",
    Wednesday: "Kwaku",
    Thursday:  "Yaw",
    Friday: "Kofi",
    Saturday: "Kwame"
 }
 let femaleAkanName={
    Sunday: "Akosua",        
    Monday: "Adwoa",
    Tuesday: "Abenaa",
    Wednesday: "Akua",
    Thursday:  "Yaa",
    Friday: "Afua",
    Saturday: "Ama"
}

    //FINDS DATE INPUT

let days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function dateResults() {
    let dateInput = document.getElementById('date');
        let dayOfWeek = new Date(dateInput.value).getDay();
        let birthday= days[dayOfWeek];
        console.log(birthday);
           return (birthday);  
           
    }
const birthday= dateResults()
console.log(birthday + "yip")
// let res= ()=> {
//     const input = birthday;
//     console.log(input);
// }
// alert(res())

   //FINDS MALE ARRAY

const foundDayArrayMale= Object.getOwnPropertyNames(maleAkanName)
    console.log(foundDayArrayMale);

    //FINDS FEMALE ARRAY

const foundDayArrayfemale= Object.getOwnPropertyNames(femaleAkanName)
    console.log(foundDayArrayfemale);
    
let comparisonMale= foundDayArrayMale.find(element => element === dateResults());
console.log(comparisonMale)
let comparisonFemale= foundDayArrayfemale.find(element => element === dateResults());

    //FUNCTION TO RETURN AKAN NAME 

let genderFunc = () =>{
        let genderInput = document.getElementById("gender").value;
        if(genderInput == document.getElementById("male").value){
            return (maleAkanName[comparisonMale])
        }else if(genderInput == document.getElementById("female").value){
            return (femaleAkanName[comparisonFemale])
        }}
        console.log(genderFunc())
    

 //RETURNING RESULTS FROM THE FORM

let formResults= () =>{
    let popup = document.getElementById("popup");
    popup.classList.toggle("show");
    document.getElementById("popup").innerHTML = 
        "Great! " + document.getElementById("name").value + ", Your Akan name is, " + genderFunc()
        + " Which means you were born on a " + dateResults();
}
function myFunction() {
   
}         

