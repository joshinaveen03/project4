function Person(firstName, lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=dob;
}

this.getFillName=function(){
    return'${this.firstName}$(this.lastName}';
}


const person1=new Person('Naveen','Joshi','26-06-1990');


console.log(person1);