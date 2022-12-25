import { useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Loader } from "./Loader";
import { GoodList } from "./GoodList";
import { Card } from "./Card";
import { BasketList } from "./BasketList";
// import { toast } from "react-toastify";
import { useContext } from "react";
import { ShopContext } from "../context";

const Shop = () => {
  const { setGoods, loading, order, isShow } = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
    // bizda data juda katta malumot bor, bizga esa undan featured degan massiv kerak holos
  }, []);
  return (
    <div className="wrapper-item">
      <div className="container content">
        <Card quantity={order.length} />
        {loading ? (
            <Loader />
        ) : (
          <GoodList/>
        )}
        {isShow && (
          <BasketList/>
        )}
      </div>
    </div>
  );
};
export { Shop };
