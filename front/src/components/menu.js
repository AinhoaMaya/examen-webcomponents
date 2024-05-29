class Menu extends HTMLElement {
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
        ul, li{
          list-style-type: none;
        }

        .menu{
          display: flex;
          gap: 3rem;
          justify-content: center;
        }
      </style>

      <nav>
        <ul class="menu">
          <li>Demos</li>
          <li>Shop</li>
          <li>Product</li>
          <li>Features</li>
          <li>Documentation</li>
        </ul>
      </nav>

      
      
    `
  }
}

customElements.define('menu-component', Menu)
