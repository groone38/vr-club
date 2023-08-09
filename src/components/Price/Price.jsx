import React from "react";

const Price = () => {
  return (
    <section className="price">
      <div className="price__block">
        <div className="price__title">
          <h2>Цены на шлем</h2>
        </div>
        <div className="price__info">
          <div></div>
          <span>Будни</span>
          <span>Выходные</span>
          <span>30 мин</span>
          <span>300р</span>
          <span>350р</span>
          <span>1 час</span>
          <span>500р</span>
          <span>600р</span>
        </div>
      </div>
      <div className="price__block">
        <div className="price__title">
          <h2>Аренда всего клуба для вашего праздника (до 15 чел.)</h2>
          <button className="price__block_btn">Что входит?</button>
        </div>
        <div className="price__info">
          <div></div>
          <span>Будни</span>
          <span>Выходные</span>
          <span>1 час</span>
          <span>2500р</span>
          <span>3000р</span>
        </div>
      </div>
      <div className="price__block">
        <div className="price__title">
          <h2>Аренда клуба ночью (до 8 чел.)</h2>
        </div>
        <div className="price__info">
          <div></div>
          <span>Будни</span>
          <span>Выходные</span>
          <span>2 часа (в период с 22:00 до 02:00)</span>
          <span>3000р</span>
          <span>3000р</span>
          <span>4 часа (в период с 22:00 до 06:00)</span>
          <span>5500р</span>
          <span>5500р</span>
        </div>
      </div>
      <div className="price__block">
        <h2>PS 5 (4 джостика)</h2>
        <div className="price__info">
          <div></div>
          <span>Будни</span>
          <span>Выходные</span>
          <span>1 час</span>
          <span>300р</span>
          <span>400р</span>
        </div>
      </div>
    </section>
  );
};

export default Price;
