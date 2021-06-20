function calculate () {
    var p1 = document.getElementById("savingAmount").value;
    var p2 = document.getElementById("numberofYears").value;
    var p3 = document.getElementById("interestValue").value;
    if(p1<=0||p2<=0||p3<=0){
        document.getElementById("output").innerHTML = "Enter the values correctly!!";
    } else{
        document.getElementById("output1").innerHTML = "If you deposit " + p1 +",";
        document.getElementById("output2").innerHTML = "at an interest rate of " + p3 +"%.";
        ret = p1 + p1*p2*(p3/100);
        document.getElementById("output3").innerHTML = "You will recieve an amount of " + ret + ",";
        da = new Date().getFullYear();
        yr = parseInt(p2)+da;
        document.getElementById("output").innerHTML = "in the year " + yr;
    }
    
    
}

function reset () {
    document.getElementById("savingAmount").value='';
    document.getElementById("numberofYears").value='';
    document.getElementById("interestValue").value='';
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