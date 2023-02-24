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
    this.total = document.createElement('p');
    this.total.textContent = `Total number of cookies sold in this location daily: ${this.dailyTotal}`
    ulElem.appendChild(this.total);
  },
};

const containerEl_1 = document.getElementById('tokyo');
let tokyo = {
  minNumberCustomer: 3,
  maxNumberCustomer: 24,
  avgCookie: 1.2,
  cookiesSoldPerHour:[],
  dailyTotal:0,
  randomNumCustomer: function () {
    return Math.floor(Math.random()*(this.maxNumberCustomer-this.minNumberCustomer+1)+this.minNumberCustomer)
  },
  calculateCookie: function () {
    for (let i=0; i<hours.length; i++){
      let randomCustomer = this.randomNumCustomer();
      let hourlyTotal = Math.ceil(randomCustomer * this.avgCookie);
      this.cookiesSoldPerHour.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function (){
    this.calculateCookie();
    const h3Elem = document.createElement('h3');
    h3Elem.textContent = 'Tokyo location';
    containerEl_1.appendChild(h3Elem);

    let ulElem = document.createElement('ul');
    for (let i=0; i<hours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `At ${hours[i]} sold ${this.cookiesSoldPerHour[i]} cookies.`;
      ulElem.appendChild(liElem);
    } containerEl_1.appendChild(ulElem);
    let total = document.createElement('p');
    total.textContent = `Total number of cookies sold in this location daily: ${this.dailyTotal}`;
    ulElem.appendChild(total);
  }
};

let containerEl_2 = document.getElementById('dubai');

let dubai = {
  minNumberCustomer: 11,
  maxNumberCustomer: 38,
  avgCookie: 3.7,
  cookiesSoldPerHour: [],
  dailyTotal: 0,
  randomNum: function (){
    return Math.floor(Math.random()*(this.maxNumberCustomer-this.minNumberCustomer+1)+this.minNumberCustomer);
  },
  calculateCookie: function(){
    for (let i=0; i<hours.length;i++){
      let randomNumCustomer = this.randomNum();
      let hourlyTotal = Math.ceil(randomNumCustomer * this.avgCookie);
      this.cookiesSoldPerHour.push(hourlyTotal);
      this.dailyTotal+=hourlyTotal;
    }
  },
  render: function(){
    this.calculateCookie();
    const h3Elem = document.createElement('h3');
    h3Elem.textContent = 'Dubai location';
    containerEl_2.appendChild(h3Elem);

    let ulElem = document.createElement('ul');
    for (let i=0; i<hours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `At ${hours[i]} sold ${this.cookiesSoldPerHour[i]} cookies.`;
      ulElem.appendChild(liElem);
    } containerEl_2.appendChild(ulElem);
    let total = document.createElement('p');
    total.textContent = `Total number of cookies sold in this location daily: ${this.dailyTotal}`;
    ulElem.appendChild(total);
  }
};

const containerEl_3 = document.getElementById('paris');

let paris = {
  minNumberCustomer:20,
  maxNumberCustomer:38,
  avgCookie:2.3,
  cookiesSoldPerHour:[],
  dailyTotal: 0,
  randomNum: function(){
    return Math.floor(Math.random()*(this.maxNumberCustomer-this.minNumberCustomer+1)+this.minNumberCustomer);
  },
  calculateCookie: function(){
    for (let i =0; i<hours.length; i++){
      let randomCustomer = this.randomNum();
      let hourlyTotal = Math.ceil(randomCustomer * this.avgCookie);
      this.cookiesSoldPerHour.push(hourlyTotal);
      this.dailyTotal+=hourlyTotal;
    }
  },
  render: function(){
    this.calculateCookie();
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = 'Paris location';
    containerEl_3.appendChild(h3Elem);

    let ulElem = document.createElement('ul');
    for (let i=0; i<hours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `At ${hours[i]} sold ${this.cookiesSoldPerHour[i]} cookies.`;
      ulElem.appendChild(liElem);
    } containerEl_3.appendChild(ulElem);
    let total = document.createElement('p');
    total.textContent = `Total number of cookies sold in this location daily: ${this.dailyTotal}`;
    ulElem.appendChild(total);
  }
};

const containerEl_4 = document.getElementById('lima');

let lima = {
  minNumberCustomer: 2,
  maxNumberCustomer: 16,
  avgCookie: 4.6,
  cookiesSoldPerHour: [],
  dailyTotal:0,
  randomNum: function (){
    return Math.floor(Math.random()*(this.maxNumberCustomer-this.minNumberCustomer+1)+this.minNumberCustomer);
  },
  calculateCookie: function(){
    for (let i=0; i<hours.length; i++){
      let randomCustomer = this.randomNum();
      let hourlyTotal = Math.ceil(randomCustomer * this.avgCookie);
      this.cookiesSoldPerHour.push(hourlyTotal);
      this.dailyTotal+=hourlyTotal;
    }
  },
  render: function(){
    this.calculateCookie();
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = 'Lima Location';
    containerEl_4.appendChild(h3Elem);

    let ulElem = document.createElement('ul')
    for (let i=0; i<hours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `At ${hours[i]} sold ${this.cookiesSoldPerHour[i]} cookies.`;
      ulElem.appendChild(liElem);
    } containerEl_4.appendChild(ulElem);
    let total = document.createElement('p');
    total.textContent = `Total number of cookies sold in this location daily: ${this.dailyTotal}`;
    ulElem.appendChild(total);
  },
};
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


