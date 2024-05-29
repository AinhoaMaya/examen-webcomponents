class Sale extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */` 
      <style>
        .intro-button button{
          background-color: hsl(0, 80%, 60%);
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          color: hsl(0, 0%, 100%);
          font-size: 13px;
          font-weight: 800;
          outline: none;
          padding: 0.8rem 3rem;
          text-transform: uppercase;
        }

        .intro-button button:hover{
          background-color: hsl(0, 80%, 63%);
        }
      </style>

      <div class="intro-button">
        <button>intro sale</button>
      </div>
    `
  }
}

customElements.define('sale-component', Sale)
