console.log('js loaded!');


$(document).ready(handleReady)

let employees = [];

function handleReady(){
    $(document).on('click', '#submit-btn', onSubmit);
}

function onSubmit(){

//created an object to push to employees
let newEmployee = {    
    firstName: $('#first-name').val(),
    lastName: $('#last-name').val(),
    idNumber: $('#id-number').val(),
    jobTitle: $('#job-title').val(),
    AnnualSalary: $('#annual-salary').val()
}

    //empty inputs
    $('#movie-name').val('');
    $('#last-name').val('');
    $('#id-number').val('');
    $('#job-title').val('');
    $('#annual-salary').val('');

employees.push(newEmployee);


    $('#salary-table').append(`
    <tr>
                <td>${newEmployee.firstName}</td>
                <td>${newEmployee.lastName}</td>
                <td>${newEmployee.idNumber}</td>
                <td>${newEmployee.jobTitle}</td>
                <td>${newEmployee.AnnualSalary}</td>
            </tr>
    `);

for(let salary of employees){
    let totalSalary = 0;
    totalSalary += (salary.AnnualSalary);
    console.log(totalSalary);
    }
}


