export class MyCustomElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Custom element added to page.");
        this.render()
    }

    static get tag(): string {
        return "my-custom-element"
    }

    render() {
        this.innerHTML = `
        <h1>TODO</h1>
    `
    }
}

