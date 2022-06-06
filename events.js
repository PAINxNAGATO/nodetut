// fuck yes
// events some real shit finally 
// real work 
// heavily used in js.
// event driven programming
// a style in which flow of a program is of least importance 
// its easy with gui (graphical user interface like an button )
// module 
// 
// setup for events 

const eventemitter = require('events');

const customemitter = new eventemitter();

// ON - listen for an event . 
// emit - emits an event .
// emits -- to produce or discharge something.
customemitter.on(/*name of the event*/'response', (name,id) => {
  console.log(`Data received of ${name} and with id number : ${id}`);
});
// there can be multiple events 

customemitter.on(/*name of the event*/'response', (name,id) => {
console.log(`trafalgar law is op but character ${name} and with id number : ${id}is opier`);
});

// 
// this order is important 
// first we listen for event and then emit it .
// when emit is called it runs the callback in the on fumction.
// as we use the call function we can pass in the arguement.
customemitter.emit('response','PAIN',787);