/* jshint esversion: 6 */

const Counter = {
  rootElement: '#app',
  count: parseInt(localStorage.getItem('count')),
  start: function(){
    this.cacheDOM();
    this.bindEvents();
    if (!this.count) {
      this.count = 0;
    }
    this.render();
  },
  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.incrementer = this.root.querySelector('.increment');
    this.decrementer = this.root.querySelector('.decrement');
    this.reset = this.root.querySelector('.reset');
    this.output = this.root.querySelector('.output');
  },
  bindEvents: function(){
    this.incrementer.addEventListener('click', () => {
      this.addAmount = parseInt(this.root.querySelector('.addAmount').value);
      this.count = this.count += this.addAmount;
      localStorage.setItem('count', this.count);
      this.render();
    });
    this.decrementer.addEventListener('click', () => {
      this.subAmount = parseInt(this.root.querySelector('.subAmount').value);
      this.count = this.count -= this.subAmount;
      localStorage.setItem('count', this.count);
      this.render();
    });
    this.reset.addEventListener('click', () => {
      this.count = 0;
      localStorage.setItem('count', this.count);
      this.render();
    });
  },
  render: function(){
    this.output.textContent = this.count;
  }
};

Counter.start();
