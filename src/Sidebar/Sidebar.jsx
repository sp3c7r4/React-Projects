import Category from './Category/Category'
import './Sidebar.css'
import Price from './Price/Price.jsx'
import Colors from './Colors/Colors.jsx'

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category/>
        <Price/>
        <Colors/>
      </section>
    </>
  )
}

export default Sidebar