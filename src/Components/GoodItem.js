import { useContext } from "react";
import { ShopContext } from "../context";

const GoodItem = (props) => {
  const { id, name, description, price, full_background} = props;
  const {addtoBacket} = useContext(ShopContext)
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
      <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action"> 
      {/* addtoBacket ga biz oyinchoqni, yani goods dagi itemni parametr qilib berishimiz kerak, shuni biz item deb emas ,item = {id, name} deb berdik */}
        <button className="btn" onClick={()=> addtoBacket({id, name, price, full_background})}>Buy 👆</button>
        <span className="right">{price}$</span>
      </div>
    </div>
  );
};
export { GoodItem };
