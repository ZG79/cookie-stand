'use strict';

const containerEl = document.getElementById('seattle');
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  minNumberCustomer: 23,
  maxNumberCustomer: 65,
  avgCookie: 6.3,
  cookiesSoldPerHour: [],
  dailyTotal: 0,
  randomNumCustomer : function () {
    return Math.floor(Math.random()*(this.maxNumberCustomer-this.minNumberCustomer+1)+this.minNumberCustomer);
  },
  calculateCookie: function () {
    for (let i=0; i<hours.length; i++){
      let randomCustomer = this.randomNumCustomer();
      let hourlyTotal = Math.ceil(randomCustomer * this.avgCookie); 
      this.cookiesSoldPerHour.push(hourlyTotal);
      this.dailyTotal+=hourlyTotal;
    } 
  },

  render: function(){
    this.calculateCookie();
    const h3Elem = document.createElement('h3');
    h3Elem.textContent = 'Seattle location';
    containerEl.appendChild(h3Elem);

    let ulElem = document.createElement('ul');
    for (let i=0; i<hours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `At ${hours[i]} sold ${this.cookiesSoldPerHour[i]} cookies.`;
      ulElem.appendChild(liElem);
    } containerEl.appendChild(ulElem);
  },
};
seattle.render();
// seattle.calculateCookie();
// console.log(seattle.cookiesSoldPerHour);
// console.log(seattle.dailyTotal);




