class TodoInput extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
          <input type="text" placeholder="Skriv något" />
        `;
      }
    }
  
    connectedCallback() {
      if (this.shadowRoot) {
        const input = this.shadowRoot.querySelector('input');
        if (input) {
          input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
              this.dispatchEvent(new CustomEvent('submit', {
                detail: { text: input.value },
                bubbles: true
              }));
              input.value = ''; // QoL feature, slipper du ta bort text direkt efteråt
            }
          });
        }
      }
    }
  }
  
  customElements.define('todo-input', TodoInput);
  