const person = {
    name: 'Rakesh',
    skills: ['js', 'java', 'py'],

    // inside a method, the value of this will still refer to the current object
    detailsWithOutBind: function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)  // undefined knows the the list of skills
        })
    },

    detailsWithBind: function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)  // Rakesh knows the list of skills
        }.bind(this))
    },
    
// inside a method, if there is a function, inside that function, value of this keyword is the global object not the current object
    profile: function(){
        function someFunction(){
            console.log(this.name)  // undefined
        }
        someFunction()
        return this
    }
}

// at browser level the this keyword will refer to the window object
// at node level the this keyword will refer to the node global object - by default

person.detailsWithOutBind()
person.detailsWithBind()
console.log(person.profile())