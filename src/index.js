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
    let dateInput = document.getElementById('date').value;
        let dayOfWeek = new Date(dateInput).getDay();
        let birthday= days[dayOfWeek];
        console.log(birthday);
           return (birthday);  
           
    }
const birthday= dateResults()
console.log(birthday)

   //FINDS MALE ARRAY

const foundDayArrayMale= Object.getOwnPropertyNames(maleAkanName)
    console.log(foundDayArrayMale);

//     //FINDS FEMALE ARRAY

const foundDayArrayfemale= Object.getOwnPropertyNames(femaleAkanName)
    console.log(foundDayArrayfemale);
    

//     //FUNCTION TO RETURN AKAN NAME 


 

    //VARIABLES
let button= document.querySelector('#btn');
button.addEventListener("click", function (x) {
    x.preventDefault(); })


 //RETURNING RESULTS FROM THE FORM

let formResults= () =>{
    
    let genderInput = document.getElementById("gender").value;

let genderFunc = () =>{
    const comparisonMale= foundDayArrayMale.find(element => element === dateResults());
    const comparisonFemale= foundDayArrayfemale.find(element => element === dateResults());

    const male = document.getElementById("male").value;
    const female = document.getElementById("female").value;

        if(genderInput == male){
            return (maleAkanName[comparisonMale]);
        }else if(genderInput == female){
            return (femaleAkanName[comparisonFemale]);
        }
}
    let empty = document.querySelector("#date").value && document.querySelector("#name").value;
    let popup = document.getElementById("popup");

    if(empty == ""){
        popup.classList.toggle("none");
        alert("Please fill in all the slots of the form!")
        return false;
    }else if(genderFunc() === undefined){
        popup.classList.toggle("none");
        alert("Please fill in all the slots of the form!")
        return false;
    }else{
        popup.classList.toggle("show");
        document.getElementById("popup").innerHTML = 
            "Great! " + document.getElementById("name").value + ", Your Akan name is, " + genderFunc()
            + " Which means you were born on a " + dateResults();
    }
    const reset= () =>{
        // const resbtn = document.querySelector('#reset')
        return popup.classList.toggle("none");

    }
}

        

