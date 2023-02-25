'use strict';
//Global variable for hours of ooperation.
const hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];
//Global container
const containerEl = document.getElementById('location');
//random number generator
function randomNumCustomer(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let allLocation = [];

let seattle = new CookieSales('Seattle', 23, 65, 6.3);
let tokyo = new CookieSales('Tokyo',3,24,1.2);
let dubai = new CookieSales('Dubai', 11, 38, 3.7);
let paris = new CookieSales('Paris', 20, 38, 2.3);
let lima = new CookieSales ('Lima',2,16,4.6);

function CookieSales(city, minNumberCustomer, maxNumberCustomer, avgCookie) {
  this.city = city;
  this.minNumberCustomer = minNumberCustomer;
  this.maxNumberCustomer = maxNumberCustomer;
  this.avgCookie = avgCookie;
  this.cookiesSoldPerHour = [];
  this.dailyTotal = 0;

  allLocation.push(this);
}
CookieSales.prototype.calculateCookie = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomCustomer = randomNumCustomer(
      this.maxNumberCustomer,
      this.minNumberCustomer
    );
    let hourlyTotal = Math.ceil(randomCustomer * this.avgCookie);
    this.cookiesSoldPerHour.push(hourlyTotal);
    this.dailyTotal += hourlyTotal;
  }
};

const tableEl = document.createElement('table');
containerEl.appendChild(tableEl);

let firstTh = document.createElement('th');
tableEl.appendChild(firstTh);
for (let i=0; i<hours.length; i++){
  let th = document.createElement('th');
  th.textContent = `${hours[i]} `;
  tableEl.appendChild(th);
}

let totalDaily = document.createElement('th');
totalDaily.textContent = 'Daily Location Total';
tableEl.appendChild(totalDaily);

CookieSales.prototype.render = function () {
  this.calculateCookie();
  const row1 = document.createElement('tr');
  tableEl.appendChild(row1);
  const tableBody = document.createElement('td');
  tableBody.textContent = this.city;
  row1.appendChild(tableBody);

  // let tabRow = document.createElement('tr');
  for (let i = 0; i < hours.length; i++) {
    let td2 = document.createElement('td');
    td2.textContent = `${this.cookiesSoldPerHour[i]}`;
    row1.appendChild(td2);
    // td.appendChild(td2);
  } 
  let storeTotal = document.createElement('td');
  storeTotal.textContent = `${this.dailyTotal}`
  row1.appendChild(storeTotal);
  
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


// const containerEl_1 = document.getElementById('tokyo');
// let tokyo = {
//   minNumberCustomer: 3,
//   maxNumberCustomer: 24,
//   avgCookie: 1.2,
//   cookiesSoldPerHour:[],
//   dailyTotal:0,
//   randomNumCustomer: function () {
//     return Math.floor(Math.random()*(this.maxNumberCustomer-this.minNumberCustomer+1)+this.minNumberCustomer)
//   },
//   calculateCookie: function () {
//     for (let i=0; i<hours.length; i++){
//       let randomCustomer = this.randomNumCustomer();
//       let hourlyTotal = Math.ceil(randomCustomer * this.avgCookie);
//       this.cookiesSoldPerHour.push(hourlyTotal);
//       this.dailyTotal += hourlyTotal;
//     }
//   },
//   render: function (){
//     this.calculateCookie();
//     const h3Elem = document.createElement('h3');
//     h3Elem.textContent = 'Tokyo location';
//     containerEl_1.appendChild(h3Elem);

//     let ulElem = document.createElement('ul');
//     for (let i=0; i<hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `At ${hours[i]} sold ${this.cookiesSoldPerHour[i]} cookies.`;
//       ulElem.appendChild(liElem);
//     }
//     containerEl_1.appendChild(ulElem);
//     let total = document.createElement('p');
//     total.textContent = `Total number of cookies sold in this location daily: ${this.dailyTotal}`;
//     ulElem.appendChild(total);
//   }
// };

// let containerEl_2 = document.getElementById('dubai');
// let dubai = {
//   minNumberCustomer: 11,
//   maxNumberCustomer: 38,
//   avgCookie: 3.7,
//   cookiesSoldPerHour: [],
//   dailyTotal: 0,
//   randomNum: function (){
//     return Math.floor(Math.random()*(this.maxNumberCustomer-this.minNumberCustomer+1)+this.minNumberCustomer);
//   },
//   calculateCookie: function(){
//     for (let i=0; i<hours.length;i++){
//       let randomNumCustomer = this.randomNum();
//       let hourlyTotal = Math.ceil(randomNumCustomer * this.avgCookie);
//       this.cookiesSoldPerHour.push(hourlyTotal);
//       this.dailyTotal+=hourlyTotal;
//     }
//   },
//   render: function(){
//     this.calculateCookie();
//     const h3Elem = document.createElement('h3');
//     h3Elem.textContent = 'Dubai location';
//     containerEl_2.appendChild(h3Elem);

//     let ulElem = document.createElement('ul');
//     for (let i=0; i<hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `At ${hours[i]} sold ${this.cookiesSoldPerHour[i]} cookies.`;
//       ulElem.appendChild(liElem);
//     }
//     containerEl_2.appendChild(ulElem);
//     let total = document.createElement('p');
//     total.textContent = `Total number of cookies sold in this location daily: ${this.dailyTotal}`;
//     ulElem.appendChild(total);
//   }
// };

// const containerEl_3 = document.getElementById('paris');

// let paris = {
//   minNumberCustomer:20,
//   maxNumberCustomer:38,
//   avgCookie:2.3,
//   cookiesSoldPerHour:[],
//   dailyTotal: 0,
//   randomNum: function(){
//     return Math.floor(Math.random()*(this.maxNumberCustomer-this.minNumberCustomer+1)+this.minNumberCustomer);
//   },
//   calculateCookie: function(){
//     for (let i =0; i<hours.length; i++){
//       let randomCustomer = this.randomNum();
//       let hourlyTotal = Math.ceil(randomCustomer * this.avgCookie);
//       this.cookiesSoldPerHour.push(hourlyTotal);
//       this.dailyTotal+=hourlyTotal;
//     }
//   },
//   render: function(){
//     this.calculateCookie();
//     let h3Elem = document.createElement('h3');
//     h3Elem.textContent = 'Paris location';
//     containerEl_3.appendChild(h3Elem);

//     let ulElem = document.createElement('ul');
//     for (let i=0; i<hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `At ${hours[i]} sold ${this.cookiesSoldPerHour[i]} cookies.`;
//       ulElem.appendChild(liElem);
//     }
//     containerEl_3.appendChild(ulElem);
//     let total = document.createElement('p');
//     total.textContent = `Total number of cookies sold in this location daily: ${this.dailyTotal}`;
//     ulElem.appendChild(total);
//   }
// };

// const containerEl_4 = document.getElementById('lima');

// let lima = {
//   minNumberCustomer: 2,
//   maxNumberCustomer: 16,
//   avgCookie: 4.6,
//   cookiesSoldPerHour: [],
//   dailyTotal:0,
//   randomNum: function (){
//     return Math.floor(Math.random()*(this.maxNumberCustomer-this.minNumberCustomer+1)+this.minNumberCustomer);
//   },
//   calculateCookie: function(){
//     for (let i=0; i<hours.length; i++){
//       let randomCustomer = this.randomNum();
//       let hourlyTotal = Math.ceil(randomCustomer * this.avgCookie);
//       this.cookiesSoldPerHour.push(hourlyTotal);
//       this.dailyTotal+=hourlyTotal;
//     }
//   },
//   render: function(){
//     this.calculateCookie();
//     let h3Elem = document.createElement('h3');
//     h3Elem.textContent = 'Lima Location';
//     containerEl_4.appendChild(h3Elem);

//     let ulElem = document.createElement('ul');
//     for (let i=0; i<hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `At ${hours[i]} sold ${this.cookiesSoldPerHour[i]} cookies.`;
//       ulElem.appendChild(liElem);
//     }
//     containerEl_4.appendChild(ulElem);
//     let total = document.createElement('p');
//     total.textContent = `Total number of cookies sold in this location daily: ${this.dailyTotal}`;
//     ulElem.appendChild(total);
//   },
// };

// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
