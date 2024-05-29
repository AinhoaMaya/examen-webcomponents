class Logo extends HTMLElement {
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
        .logo{
          width: 150px;
          cursor: pointer;
        } 
        
        img{
          object-fit: cover;
          width: 100%;
        }
      </style>

      <div class="logo">
        <picture>
          <source srcset="./public/logo.png" type="image/png" media="(min-width: 1200px)">
          <source srcset="./public/logo.png" type="image/png" media="(min-width: 992px)">
          <source srcset="./public/logo.png" type="image/png" media="(max-width: 601px)">
          <source srcset="./public/logo.png" type="image/png" media="(max-width: 600px)">
          <img src="./public/logo.png" alt="logo-ecomall" title="logo ecomall">
        </picture>
      </div>

    `

    
  }
}

customElements.define('logo-component', Logo)
