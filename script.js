function calculate () {
    var p1 = document.getElementById("savingAmount").value;
    var p2 = document.getElementById("interestValue").value;
    var p3 = document.getElementById("numberofYears").value;
    if(p1<=0||p2<=0||p3<=0){
        reset();
        document.getElementById("output").innerHTML = "Enter positive values!!";
    } else{
        document.getElementById("output1").innerHTML = "If you deposit ";
        document.getElementById("amt").innerHTML = p1 +",";
        document.getElementById("output2").innerHTML = "at an interest rate of ";
        document.getElementById("int").innerHTML = p2 +"%.";
        ret = p1*p2*(p3/100);
        document.getElementById("output3").innerHTML = "You will recieve an amount of ";
        document.getElementById("ret").innerHTML = ret + ",";
        da = new Date().getFullYear();
        yr = parseInt(p3)+da;
        document.getElementById("output").innerHTML = "in the year ";
        document.getElementById("yrs").innerHTML = yr;
    }
    
    
}

function reset () {
    document.getElementById("savingAmount").value='';
    document.getElementById("numberofYears").value='';
   
    document.getElementById("output1").innerHTML = "";
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output3").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    
}

function trig() {
    console.info("trig is called");
    document.getElementById("ranger").innerHTML= document.getElementById('interestValue').value + "%";
}

function add_years(dt,n) 
 {
 return new Date(dt.setFullYear(dt.getFullYear() + n));      
 }