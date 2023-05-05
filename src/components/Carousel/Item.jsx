import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.css";

const Item = ({ movie, fun }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive,
          })}
          //onClick={() => onSelectSlide(movie)}
          onClick={() => fun(movie)}
        >
          <img
            src={movie.image}
            className="rounded-lg cursor-pointer"
            alt=""
            //
          />
          {/* <ShowDetailsButton onClick={() => onSelectSlide(movie)} /> */}
          {/* isActive && <Mark />*/}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
