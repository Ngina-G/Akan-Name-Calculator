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
   //FINDS MALE ARRAY

const foundDayArrayMale= Object.getOwnPropertyNames(maleAkanName)
    console.log(foundDayArrayMale);

    //FINDS FEMALE ARRAY

const foundDayArrayfemale= Object.getOwnPropertyNames(femaleAkanName)
    console.log(foundDayArrayfemale);
    
    //FINDS DATE INPUT

let days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function dateResults() {
    let dateInput = document.getElementById('date');
        let dayOfWeek = new Date(dateInput.value).getDay();
        let birthday= days[dayOfWeek];
        console.log(birthday);
        return (birthday);
    }

    //FUNCTION TO RETURN AKAN NAME 

function genderFunc() {
    let comparisonMale= foundDayArrayMale.find(element => element === dateResults());
    console.log(comparisonMale);
    let comparisonFemale= foundDayArrayfemale.find(element => element === dateResults());
    console.log(comparisonFemale);
    let genderInput = document.getElementById("gender").value;
        if(genderInput == "male"){
            return (maleAkanName[comparisonMale])
        }else if(genderInput == "female"){
            return (femaleAkanName[comparisonFemale])
        }
}

 //RETURNING RESULTS FROM THE FORM

let formResults= () =>{
    
}
        

function final(gender){
    if(gender == "male"){
        document.write
    }
}

console.log(final('female'))

   

