import './App.css';

function App() : JSX.Element{
  return (
    <div className='App align-v-h'>
      <div className='product align-v-h '>
        <img className="img-desktop"alt="parfum" src="./../images/image-product-desktop.jpg" />
        <img className="img-mobile" alt="parfum" src="./../images/image-product-mobile.jpg" />
        <section className='details'>
          <h2>PERFUME</h2>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className='price align-v-h'>
            <p>$149.99</p>
            <p>$169.99</p>
          </div>
          <button className='align-v-h'>
            <img alt='Shopping Cart' src='./../images/icon-cart.svg'/>
            Add to Cart
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
