$(readyNow);

let employees = [];

function readyNow(){
    $( '#btnSubmit' ).on('click', handleSubmit);
}

function handleSubmit(){

    // Declare input variables
    console.log('btn working');
    firstName = $( '#first-name' ).val();
    lastName = $( '#last-name' ).val();
    idNum = $( '#id-num' ).val();
    jobTitle = $( '#job-title' ).val();
    annSalary = $( '#ann-salary' ).val();

    // Alert if missing fields
    if (
        firstName === '' || 
        lastName === '' || 
        idNum === '' || 
        jobTitle === '' || 
        annSalary === '' 
    ){
        alert('Please Ensure you have input all fields!')
        return false;
    }

    // empties input fields
    $( 'input' ).val( '' );

    // create array object from inputs
    employees.push({
        firstName: firstName,
        lastName: lastName,
        idNum: idNum,
        jobTitle: jobTitle,
        annSalary: annSalary,
    })

    // empty tbody before re-running function
    $( 'tbody' ).empty();

    // Creates new row in table with object array info
    // Also calculates annualTotal
    let annSalaryTotal = 0;
    for (let employee of employees){
        $( 'tbody' ).append(`<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNum}</td>
            <td>${employee.jobTitle}</td>
            <td>$${employee.annSalary}</td>
        </tr>`); 

        annSalaryTotal += Number(employee.annSalary);
    }
    monthlyTotal = annSalaryTotal / 12;

    // Empty + append the Monthly total
    $( '#totalMonthly' ).empty();
    $( '#totalMonthly' ).append(monthlyTotal); // need to round
    
}

