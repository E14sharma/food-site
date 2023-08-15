import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <header id="website-title">
        <h1>Delicious Food</h1>
      </header>
      <section>
        <h2>Featured Dish</h2>
        <div className="dish-card">
          <img className='dish-image' src='https://shorturl.at/qBDG2' alt text="Featured Dish" />
          <div className='dish-details'>
            <h3 className='dish-name'>Spaghetti Bolognese</h3>
            <p className='dish=discription'>A popular dish you want to try</p>
            <button>Order Now</button>
          </div>
        </div>
        <button>Order Now</button>

      {/* Dish Image : https://shorturl.at/qBDG2 */}

      </section>
      <footer id="footer">
        <p>&copy; 2023 Delicious Food</p>

      </footer>
    </div>
  );
}

export default App;
