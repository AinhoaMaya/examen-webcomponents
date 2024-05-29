class Hero extends HTMLElement {
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
        .hero{
          display: flex;
          gap: 5rem;
        }

        .hero-content{
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .hero-content h1, h3{
          font-weight: 800;
          text-transform: capitalize;
        }

        .hero-content h1{
          font-size: 48px;
        }

        .hero-content h3{
          font-weight: 400;
        }

        .content-title{
          max-width: 20rem;
        }

        .content-icons{
          display: flex;
          gap: 5rem;
        }

        .icon-woocommerce, .icon-elementor, .icon-elite{
          display: flex;
          gap: 0.7rem;
        } 

        .icon-elementor img, .icon-elite img{
          width: 1.5rem;
        } 

        .icon-woocommerce img{
          width: 2.5rem;
        } 

        .content-buttons{
          display: flex;
          gap: 0.7rem;
        }

        .view-button button, .buy-button button{
          background-color: hsl(216, 100%, 50%);
          border: none;
          border-radius: 0.5rem;
          color: hsl(0, 0%, 100%);
          font-size: 13px;
          font-weight: 800;
          outline: none;
          padding: 0.8rem 2rem;
          text-transform: uppercase;
        }

        .buy-button button{
          background-color: hsl(0, 0%, 100%);
          color: hsl(0, 1%, 16%);
          border: 1px solid hsl(0, 1%, 16%);
        }
      </style>

      <div class="hero">
        <div class="hero-content">
          <div class="content-title">
            <h1>ecomall wooCommerce wordpress theme</h1>
          </div>
          <div class="content-subtitle">
            <h3>easy to use Premium Multi-pupose Theme</h3>
          </div>
          <div class="content-icons">
            <div class="icon-woocommerce">
              <picture>
                <source srcset="./public/woo.png" type="image/png" media="(min-width: 1200px)">
                <source srcset="./public/woo.png" type="image/png" media="(min-width: 992px)">
                <source srcset="./public/woo.png" type="image/png" media="(max-width: 601px)">
                <source srcset="./public/woo.png" type="image/png" media="(max-width: 600px)">
                <img src="./public/woo.png" alt="logo-woocommerce" title="logo woocommerce">
              </picture>
              <span>WooCommerce</span>
            </div>
            <div class="icon-elementor">
              <picture>
                <source srcset="./public/elementor.png" type="image/png" media="(min-width: 1200px)">
                <source srcset="./public/elementor.png" type="image/png" media="(min-width: 992px)">
                <source srcset="./public/elementor.png" type="image/png" media="(max-width: 601px)">
                <source srcset="./public/elementor.png" type="image/png" media="(max-width: 600px)">
                <img src="./public/elementor.png" alt="logo-elementor" title="logo elementor">
              </picture>
              <span>Elementos</span>
            </div>
            <div class="icon-elite">
              <picture>
                <source srcset="./public/elite-author.png" type="image/png" media="(min-width: 1200px)">
                <source srcset="./public/elite-author.png" type="image/png" media="(min-width: 992px)">
                <source srcset="./public/elite-author.png" type="image/png" media="(max-width: 601px)">
                <source srcset="./public/elite-author.png" type="image/png" media="(max-width: 600px)">
                <img src="./public/elite-author.png" alt="logo-elite-author" title="logo elite author">
              </picture>
              <span>Elite Author</span>
            </div>
          </div>
          <div class="content-buttons">
            <div class="view-button">
              <button>view demo</button>
            </div>
            <div class="buy-button">
              <button>buy ecomall</button>
            </div>
          </div>
        </div>

        <div class="hero-material">
          <picture>
            <source srcset="./public/gif.png" type="image/png" media="(min-width: 1200px)">
            <source srcset="./public/intro-homes-ecomall.gif" type="image/gif" media="(min-width: 992px)">
            <source srcset="./public/intro-homes-ecomall.gif" type="image/gif" media="(max-width: 601px)">
            <source srcset="./public/intro-homes-ecomall.gif" type="image/gif" media="(max-width: 600px)">
            <img src="./public/intro-homes-ecomall.gif" alt="gif-ecomall" title="gif ecomall">
          </picture>
        </div>
      </div>
    `
  }
}

customElements.define('hero-component', Hero)
