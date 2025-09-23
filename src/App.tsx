import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="price_calculator">
        <div className="price_calculator_container price_calculator-design">
          <h2 className="price_calculator-design_title">
            КАЛЬКУЛЯТОР ЖАЛЮЗИ И РУЛОННЫХ ШТОР
          </h2>
          <div className="price_calculator-design_example">
            <img
              className="price_calculator-design_example-image"
              src="https://hoff.ru/upload/medialibrary/319/0ckpybiopzoam13afu21d28cwu7v4568.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="price_calculator_container price_calculator-parameters">
          <div className="price_calculator-parameters_values"></div>
          <div className="price_calculator-parameters_price">
              <h3 className="price_title">ИТОГОВАЯ СТОИМОСТЬ</h3>
              <p className="price_text">
                Если вы не нашли подходящий вариант — обратитесь к нам по
                контактам, указанным ниже мы сделаем эскиз индивидуального заказ
              </p>
            <div className="price_container">
              <div className="price_sum">10 790 ₽</div>
              <button className="price_buttonBasket">
                <img src="./Vector.svg" alt="" />
                ДОБАВИТЬ В КОРЗИНУ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
