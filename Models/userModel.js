class User{
    constructor(id, firstName, lastName, passwordHash, email, gender, mobile, img, dateOfBirth, greetingIntro){
                this.id = id;
                this.firstName = firstName;
                this.lastName = lastName;
                this.passwordHash = passwordHash;
                this.email = email;
                this.gender = gender;
                this.mobile = mobile;
                this.img = img;
                this.dateOfBirth = dateOfBirth;
                this.greetingIntro = greetingIntro;
    }
}

module.exports = User;