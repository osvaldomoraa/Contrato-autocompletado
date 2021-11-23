var trigger_input_1 = document.querySelector('.secondSurname');
var trigger_output_1 = document.getElementById('userName');
trigger_input_1.addEventListener('change', updateValue);
function updateValue() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var secondSurname = document.getElementById("secondSurname").value;
    var fullName = firstName + " " + lastName + " " + secondSurname;
    trigger_output_1.textContent = fullName;
}

var trigger_input_2 = document.getElementById('neighborhood');
trigger_input_2.addEventListener('change', (event) => {
    var trigger_output_2 = document.getElementById('userAdress');

    var street = document.getElementById("street").value;
    var intNum = document.getElementById("intNum").value;  
    var zip = document.getElementById("zip").value;
    var state = document.getElementById("state").value;
    var neighborhood = document.getElementById("neighborhood").value;
    var fullAddress = street + " " + intNum + ", " + zip + ", " + neighborhood + ", " + state;
    trigger_output_2.textContent = fullAddress;
});