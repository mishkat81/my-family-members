
//working duration start

   

function calculate_age(x){
           
            
    var birth_date = new Date(x);
    var birth_date_day = birth_date.getDate();
    var birth_date_month = birth_date.getMonth();
    var birth_date_year = birth_date.getFullYear();

    var toDay_date = new Date();
    var toDay_date_day = toDay_date.getDate();
    var toDay_date_month = toDay_date.getMonth();
    var toDay_date_year = toDay_date.getFullYear();

    var calculated_age = 0;
    var calculated_month = 0;
    var calculated_day = 0; 
    var calculated_age = toDay_date_year - birth_date_year;
    

    if(toDay_date_day > birth_date_day){
        calculated_day = toDay_date_day - birth_date_day;
        calculated_age = toDay_date_year - birth_date_year;
        calculated_month = toDay_date_month - birth_date_month;
   }else if(toDay_date_day < birth_date_day){
        calculated_day = (toDay_date_day + 30) - birth_date_day;
        calculated_month = toDay_date_month - birth_date_month - 1;
        calculated_age = toDay_date_year - birth_date_year - 1;
   }else if(toDay_date_month > birth_date_month){
        calculated_age = toDay_date_year - birth_date_year;
        calculated_month = toDay_date_month - birth_date_month;
   }else if(toDay_date_month < birth_date_month){
        calculated_age = toDay_date_year - birth_date_year - 1;
        calculated_month = (toDay_date_month + 12) - birth_date_month;
   }else{
    calculated_age = toDay_date_year - birth_date_year;
   }

    return ('AGE: YEAR: '+calculated_age+', MONTH: '+calculated_month+', DAY: '+calculated_day);

}

// setting date of birth by ID
document.getElementById('safar_uddin').innerHTML = calculate_age("12/31/1958");
document.getElementById('rani').innerHTML = calculate_age("03/09/1963");
document.getElementById('mishkat').innerHTML = calculate_age("12/16/1981");
document.getElementById('moriom-mishkat').innerHTML = calculate_age("01/01/1987");
document.getElementById('maisha').innerHTML = calculate_age("12/25/2013");
document.getElementById('anisha').innerHTML = calculate_age("06/24/2018");
document.getElementById('kawsar').innerHTML = calculate_age("01/27/1992");
document.getElementById('ashfak').innerHTML = calculate_age("06/12/1994");
document.getElementById('siddik').innerHTML = calculate_age("10/10/1998");
document.getElementById('hafiz').innerHTML = calculate_age("10/10/1998");
document.getElementById('sabbir').innerHTML = calculate_age("10/15/2000");

document.getElementById('iskander').innerHTML = calculate_age("01/01/1968");
document.getElementById('aleya').innerHTML = calculate_age("06/13/1989");
document.getElementById('noory').innerHTML = calculate_age("11/03/2009");
document.getElementById('lovely').innerHTML = calculate_age("07/17/2011");
document.getElementById('emad').innerHTML = calculate_age("06/19/2014");
document.getElementById('rimad').innerHTML = calculate_age("02/11/2018");

// document.getElementById('kadir').innerHTML = calculate_age("06/13/1989");
document.getElementById('rohima').innerHTML = calculate_age("09/22/1990");
document.getElementById('urmi').innerHTML = calculate_age("02/02/2015");
document.getElementById('fammi').innerHTML = calculate_age("10/03/2016");








