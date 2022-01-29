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
    annSalary = Number(Math.round(($( '#ann-salary' ).val())+'e'+2)+'e-'+2); // Rounding

    // Alert if missing input info
    // if (
    //     firstName === '' || 
    //     lastName === '' || 
    //     idNum === '' || 
    //     jobTitle === '' || 
    //     annSalary === '' 
    // ){
    //     alert('Please Ensure you have input all fields!')
    //     return false;
    // }

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
            <td><button class="btnDelete">Delete</button></td>
        </tr>`); 

        annSalaryTotal += Number(employee.annSalary);
    }
    // Divides annSalaryTotal by 12 (monthly),
    monthlyTotal = Number(Math.round((annSalaryTotal / 12)+'e'+2)+'e-'+2); // Rounds

    // Empty + append the Monthly total
    $( '#totalMonthly' ).empty();
    $( '#totalMonthly' ).append(monthlyTotal);
    if (monthlyTotal > 20000){
        $( '.totalMonthlyContainer' ).css('background-color', 'red')
    }
    
}

