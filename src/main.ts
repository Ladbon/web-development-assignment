import './style.css';

// Custom elements
import './components/todo-input.ts';
import './components/todo-sticky.ts';
import { MyCustomElement } from './components/my-custom-element.ts';

customElements.define(MyCustomElement.tag, MyCustomElement);

// Lyssna för submits
document.addEventListener('submit', (event) => {
  event.preventDefault(); // stoppar eventet så du kan hantera datat själv. Superbra för submits.
  
  // Kollar om eventet är ett custom event och har property
  if (event instanceof CustomEvent && event.detail && event.detail.text != '') {
    // Skapar ett nytt element med tag 'todo-sticky'
    const todoSticky = document.createElement('todo-sticky'); // Tag
    todoSticky.setAttribute('sticky-text', event.detail.text); // nu förutspår den att jag har en sticky-text men så får det vara.
    
    // sen appendar du den till containernen
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      mainContainer.appendChild(todoSticky);
    }
  } else {
    console.error('inte ett custom event eller ingen text!');
  }
});