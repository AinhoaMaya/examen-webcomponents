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
        
      </style>

      <nav>
        <ul>
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
