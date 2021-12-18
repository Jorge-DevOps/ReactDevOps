import React from "react";
import imageproduct from "../../images/sony-headphone.jpg";
import "../../styles/components/Product.sass";
import { AiOutlineClose } from "react-icons/ai";


const Product = () => {
    
    return (
    <div className="QuickView">
      <AiOutlineClose className="QuickView-close" />
      <article className="QuickView-product">
        <p className="QuickView-product-title">sony-headphone</p>
        <div className="QuickView-product-image">
          <img className="QuickView-product-img" src={imageproduct} alt="" />
        </div>
        <section className="QuickView-data">
          <div className="QuickView-data-content">
            <label htmlFor="" className="QuickView-data-label" disable>
              Product ID
            </label>
            <input type="text" name="" id="" className="QuickView-data-input" />

            <label htmlFor="" className="QuickView-data-label">
              Name
            </label>
            <input type="text" name="" id="" className="QuickView-data-input" />

            <label htmlFor="" className="QuickView-data-label">
              Description
            </label>
            <input type="text" name="" id="" className="QuickView-data-input" />

            <label htmlFor="" className="QuickView-data-label">
              Category
            </label>
            <input type="text" name="" id="" className="QuickView-data-input" />
          </div>
          <div className="QuickView-data-content">
            <label htmlFor="" className="QuickView-data-label">
              Brand
            </label>
            <input type="text" name="" id="" className="QuickView-data-input" />

            <label htmlFor="" className="QuickView-data-label">
              Bodega
            </label>
            <input type="text" name="" id="" className="QuickView-data-input" />

            <label htmlFor="" className="QuickView-data-label">
              Inventary
            </label>
            <input type="text" name="" id="" className="QuickView-data-input" />

            <label htmlFor="" className="QuickView-data-label">
              Photo
            </label>
            <input type="text" name="" id="" className="QuickView-data-input" />
          </div>
        </section>
        <div className="QuickView-data-btn">
          <button type="submit" className="QuickView-data-sumbit">
            Guardar
          </button>
        </div>
      </article>
    </div>
  );
};

export { Product };
