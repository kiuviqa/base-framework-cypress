import { fakerES as faker } from "@faker-js/faker";

class DataGenerator {

    constructor() {
        this.faker = faker;
  }

getEmail() {
    return this.faker.internet.email();
  }

getFirstName() {
    return this.faker.person.firstName();
  }

getLastName() {
    return this.faker.person.lastName();
  }             
getPhoneNumber() {
    return this.faker.phone.number('##########');
  }       
getAddress() {
    return this.faker.location.streetAddress();
  }       
getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

getCompany() {
    return this.faker.company.name();
  }

getCity() {
    return this.faker.location.city();
  }
  
getState() {  
    return this.faker.location.state();
  }
getCountry() {
    return this.faker.location.country();
  }

}

export default new DataGenerator();