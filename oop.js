Person = {
    firstname: "John",
    lastname: "Smith",
    printname: function(){
        console.log(this.firstname, this.lastname)
    }
}

Person.printname();

Person.firstname = 'Joseph';
Person.printname(Person.firstname);