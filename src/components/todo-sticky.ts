class TodoSticky extends HTMLElement {
    static get observedAttributes() {
        return ['sticky-text']; // Definiera vilka attribut som ska observeras
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        if(this.shadowRoot) {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 10px;
                    background-color: yellow;
                    padding: 10px;
                    width: 200px;
                    color: black;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }
            </style>
            <div class="sticky-content"></div>
        `;
    }
}
  
    // Här har du callbacken till sticky-text om den förändrar för att ändra värdet på det nya elementet. 
    attributeChangedCallback(name: string, oldValue: any, newValue: string | null) {
        if (name === 'sticky-text' && oldValue !== newValue) {
            this.stickyText = newValue;
        }
    }

    set stickyText(text: string | null) {
        if (this.shadowRoot) {
            const contentElement = this.shadowRoot.querySelector('.sticky-content');
            if (contentElement) {
                contentElement.textContent = text; // Uppdatera texten
            }
        }
    }
}

customElements.define('todo-sticky', TodoSticky);
