/* jshint esversion: 6 */

const Counter = {
  rootElement: '#app',
  count: 0,
  start: function(){
    this.cacheDOM();
    this.bindAddEvent();
    this.bindSubEvent();
    this.render();
  },
  cacheDOM: function(){
    this.root = document.querySelector('#app');
    this.incrementer = document.querySelector('#increment');
    this.decrementer = document.querySelector('#decrement');
    this.output = document.querySelector('#output');
  },
  bindAddEvent: function(){
      this.incrementer.addEventListener('click', () => {
      this.count += 1;
      this.render();
    });
  },
  bindSubEvent: function(){
      this.decrementer.addEventListener('click', () => {
      this.count -= 1;
      this.render();
    });
  },
  render: function(){
    this.output.textContent = this.count;
  }
};

Counter.start();
