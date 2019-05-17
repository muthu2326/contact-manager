const person = {
    name: 'Rakesh',
    skills: ['js', 'java', 'py'],

    // inside a method, the value of this will still refer to the current object
    
    // inside a method, if there is an arrow function, inside that function, value of this keyword will still be the current object
    detailsWithBind: function(){
        this.skills.forEach((skill) => {
            console.log(`${this.name} knows ${skill}`)  // Rakesh knows the list of skills
        })
    },
    
    // inside a method, if there is an arrow function, inside that function, value of this keyword will still be the current object

    profile: function(){
         someFunction = () => {
            console.log(this.name)  // undefined
        }
        someFunction()
        return this
    }
}

person.detailsWithBind()
person.profile()