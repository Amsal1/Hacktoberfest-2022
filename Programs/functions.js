//Functions in javascript

//Function Parameter

function ShowMessage(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}

ShowMessage("Steve", "Jobs");
ShowMessage("Bill", "Gates");
ShowMessage(100, 200);

//Return Value from a function

function Sum(val1, val2) {
    return val1 + val2;
};

var result = Sum(10,20);
console.log(result);

//Nested Functions

function ShowMessage(firstName)
{
    function SayHello() {
        alert("Hello " + firstName);
    }

    return SayHello();
}

ShowMessage("Steve");
