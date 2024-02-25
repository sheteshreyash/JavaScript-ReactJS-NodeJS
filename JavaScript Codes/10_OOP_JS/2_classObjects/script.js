
// classes and objects in js
// basic syntax for a class :-
// class MyClass {
//         // class methods
//         constructor() { … }
//         method1() { … }
//         method2() { … }
// }


// class RailwayForm {
//         submit() {
//                 alert(this.name + ": Your form is submitted for train number: " + this.trainno)
//         }
//         cancel() {
//                 alert(this.name + ": This form is cancelled for train number: " + this.trainno)
//         }
//         fill(givenname, trainno) {
//                 this.name = givenname
//                 this.trainno = trainno
//         }
// }

// // Create a form for Shreyash
// let shreyForm = new RailwayForm()

// // Fill the form with Shreyash's details
// shreyForm.fill("Shreyash", 145316)

// // Create a forms for Rohan
// let rohanForm1 = new RailwayForm()
// let rohanForm2 = new RailwayForm()

// // Fill the forms with Rohan's details
// rohanForm1.fill("Rohan", 222420)
// rohanForm2.fill("Rohan", 2229211)

// shreyForm.submit()
// rohanForm1.submit()
// rohanForm2.submit()
// rohanForm1.cancel()




// Using Constructors the above problem can be solved
class RailwayForm {
        constructor(givenname, trainno, address) {
                console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
                this.name = givenname
                this.trainno = trainno
                this.address = address
        }

        preview() {
                alert(this.name + ": Your form is for Train number: " + this.trainno + " and your address is " + this.address)
        }

        submit() {
                alert(this.name + ": Your form is submitted for train number: " + this.trainno)
        }

        cancel() {
                alert(this.name + ": This form is cancelled for train number: " + this.trainno)
                this.trainno = 0
        }
}

let shreyForm = new RailwayForm("Shreyash", 13488, "420, Pacific ocean, Pune - 0000555")
shreyForm.preview()
shreyForm.submit()
shreyForm.cancel()
shreyForm.preview()
