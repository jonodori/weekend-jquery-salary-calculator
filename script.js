console.log('js loaded!');


$(document).ready(handleReady)

let employees = [];

function handleReady(){
    $(document).on('click', '#submit-btn', onSubmit);
    $(document).on('click', '.delete-btn', onDelete)
}

function onSubmit(){

//created an object to push to employees
let newEmployee = {    
    firstName: $('#first-name').val(),
    lastName: $('#last-name').val(),
    idNumber: $('#id-number').val(),
    jobTitle: $('#job-title').val(),
    AnnualSalary: Number($('#annual-salary').val())
}

    //empty inputs
    $('#first-name').val('');
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
                <td>$${newEmployee.AnnualSalary}</td>
                <td>
                <button class="delete-btn">
                    delete
                </button>
                </td>
            </tr>
    `);

calcAnnual();

}

//created a function to do the calculation 
function calcAnnual(){ 

let totalSalary = 0; // have to create variable outside the loop for calc to work
let totalMonthly = 0;

for(let salary of employees){
    
    totalSalary += salary.AnnualSalary;
    console.log(totalSalary); //test for totalSalary
    }

    totalMonthly += totalSalary / 12; // divide total, += adds up total that was divided by 12
    console.log(totalMonthly); //test for totalMonthly

    let el = $('#total-monthly'); //created variable to append and empty 
        el.empty();
        el.text(totalMonthly); 

    if (totalMonthly> 20000){
        document.body.style.backgroundColor = "red"

    }
}



function onDelete(){
    let tr = $(this).parent().parent();

    tr.remove();
}
