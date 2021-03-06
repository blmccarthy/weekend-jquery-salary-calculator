$(readyNow);

let employees = [];
const monthlyTotalMax = 20000;

function readyNow(){
    $( '#btnSubmit' ).on('click', handleSubmit);
    $( 'table' ).on('click', '#btnDelete', handleDelete);
}

function handleSubmit(){

    // Declare input variables
    console.log('btn working');
    firstName = $( '#first-name' ).val();
    lastName = $( '#last-name' ).val();
    idNum = $( '#id-num' ).val();
    jobTitle = $( '#job-title' ).val();
    // Rounding Equation
    annSalary = Number(Math.round(($( '#ann-salary' ).val())+'e'+2)+'e-'+2); 

    // Alert if missing input info
    if (
        firstName === '' || 
        lastName === '' || 
        idNum === '' || 
        jobTitle === '' || 
        annSalary === '' 
    ){
        alert('Please Ensure you have input all fields!')
        return;
    }

    // empties input fields
    $( 'input' ).val( '' );

    // create array-object from input values
    employees.push({
        firstName: firstName,
        lastName: lastName,
        idNum: idNum,
        jobTitle: jobTitle,
        annSalary: annSalary,
    })

    // empty tbody 
    $( 'tbody' ).empty();

    // Creates new row in table with object array info
    for (let employee of employees){
        $( 'tbody' ).append(`<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNum}</td>
            <td>${employee.jobTitle}</td>
            <td>$${(employee.annSalary).toLocaleString("en-US")}</td>
            <td><button id="btnDelete">Delete</button></td>
        </tr>`); 
    }
    calcMonthlyTotal(); 

} // end handleSubmit

function handleDelete(){

    let i = this.parentNode.parentNode.rowIndex;
    document.getElementById("employee-table").deleteRow(i);
    employees.splice( i-1, 1);
    calcMonthlyTotal();
    checkMonthlyMax();

} // end handleDelete

function calcMonthlyTotal(){

    // Calculate Monthly & Round
    let annSalaryTotal = 0;
    for (let employee of employees){
        annSalaryTotal += Number(employee.annSalary);
    }
    let monthlyTotalRounded = Number(Math.round((annSalaryTotal / 12)+'e'+2)+'e-'+2);
    let monthlyTotalDisplay = monthlyTotalRounded.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});   

    // Empty + append the Monthly total to DOM
    $( '#totalMonthly' ).empty();
    $( '#totalMonthly' ).append(monthlyTotalDisplay);
    checkMonthlyMax(monthlyTotalRounded);

} // end calcMonthlyTotal

function checkMonthlyMax( monthlyTotalRounded ){
    
    // enables red background color
    let totalMonthlyContainer = $( '.totalMonthlyContainer' );
    if (monthlyTotalRounded > monthlyTotalMax){
        totalMonthlyContainer.css('background-color', 'red')
    } else {
        totalMonthlyContainer.css('background-color', 'white')
    }

} // end checkMonthlyMax