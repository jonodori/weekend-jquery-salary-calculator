console.log('js loaded!');


$(document).ready(handleReady)

function handleReady(){
    $(document).on('click', '#submit-btn', onSubmit);
}

function onSubmit(){
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#id-number').val();
    let jobTitle = $('#job-title').val();
    let AnnualSalary = $('#annual-salary').val();

    $('#salary-table').append(`
    <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${idNumber}</td>
                <td>${jobTitle}</td>
                <td>$${AnnualSalary}</td>
            </tr>
    `);

    $('#movie-name').val('');
    $('#last-name').val('');
    $('#id-number').val('');
    $('#job-title').val('');
    $('#annual-salary').val('');

}