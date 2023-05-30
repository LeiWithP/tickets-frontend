import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.css";

const Item = ({ obj, fun }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === obj.id;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive,
          })}
          //onClick={() => onSelectSlide(obj)}
          onClick={() => fun(obj)}
        > 
       <div className="h-full w-full bg-auth-bg bg-cover bg-no-repeat rounded-lg aspect-video">

          <div className="h-full w-full max-w-xl rounded-lg bg-tertiary bg-opacity-50 shadow-lg backdrop-blur-md content-center flex items-center cursor-pointer hover:animate-pulse">
            <div className="w-full ">
              <div className="mx-auto">
                <div className="">
                  <h1 className="mb-4 text-lg text-white font-extrabold text-center ">{obj.parrilla}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
          
          {/* <ShowDetailsButton onClick={() => onSelectSlide(obj)} /> */}
          {/* isActive && <Mark />*/}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
/*<img
  src={obj.image}
  className="rounded-lg cursor-pointer"
  alt=""
  //
/>
*/
