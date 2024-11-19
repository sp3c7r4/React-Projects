import { AiFillStar } from 'react-icons/ai';
import './Products.css'
import { PiHandbagFill } from 'react-icons/pi';

const Products = () => {
  return (
    <section className="card-container">
      <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" className='card-img' alt="Shoe" />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
          {[...Array(4)].map((_, i) => <AiFillStar className='ratings-start' key={i} />)}
          <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del> 200
            </div>
            <div className="bag">
            <PiHandbagFill className='bag-icon'/>
            </div>
          </section>
        </div>
      </section>
    </section>
  )
}
export default Products;