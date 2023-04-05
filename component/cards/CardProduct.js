import React from "react";
import { RiArrowLeftFill } from "react-icons/ri";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoMdGitCompare } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";

function CardProduct() {
  return (
    <>
      <div id="card-product" className="media-min200-pt media-min425-pt media-min576-pt media-min1400-pt"  >
        <div
          id="card-product-container"
          className="bg-card position-relative rounded "
          style={{ paddingTop: "6.5rem" }}
        >
          <div
            id="card-product-img"
            className="w-75 mx-auto cursor-pointer bg-input d-flex justify-content-center position-absolute top-0 start-50 translate-middle rounded  "
          >
            <img
              src="./images/1.png"
              alt="ساعت مچی"
              className="w-50 hover-scale "
            />
          </div>

          <div
            id="card-product-body"
            className=" mx-auto"
            style={{ width: "90%" }}
          >
            <h4 className="py-3 cursor-pointer hover-text text-dark-color">
              چاقوی اشپزخانه
            </h4>
            <p
              id="card-product-desc"
              className="text-dark-color pb-3"
              style={{
                textAlign: "justify",
                lineHeight: "1.8",
                fontSize: ".8rem",
              }}
            >
              در لاراول ۱۰ تغییرات جدیدی ارائه شده که ما در دوره آشنایی با
              امکانات لاراول ۱۰ سعی داریم شما را با این امکانات جدید به شکل کامل
              آشنا کنیم.
            </p>
            <div
              id="card-product-discount-price"
              className="d-flex justify-content-between py-3"
            >
              <div className="d-flex align-items-center">
                <span className="bg-danger p-1 text-white rounded">10%</span>
              </div>

              <div id="card-product-price">
                <div className="text-dark-color pb-2">
                  <span className="fw-bold fs-5">{1350_000}</span>
                  <span style={{ fontSize: ".7rem" }}>تومان</span>
                </div>
                <span className="text-danger text-decoration-line-through">
                  {150_000}
                </span>
              </div>
            </div>

            <div
              id="card-product-icons"
              className="d-flex justify-content-around p-4"
            >
              <div className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer">
                <BsFillHandbagFill className="fs-5 " />

                <div id="toltip-team" className=" tooltip-Icon">
                  <span>+ سبد خرید</span>
                </div>
              </div>
              <div className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer">
                <IoMdGitCompare className="fs-6" />

                <div id="toltip-team" className=" tooltip-Icon">
                  <span>+ مقایسه</span>
                </div>
              </div>
              <div className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer">
                <MdOutlineFavorite className="fs-6" />

                <div id="toltip-team" className=" tooltip-Icon">
                  <span>+ علاقه مندی</span>
                </div>
              </div>
            </div>
            <hr className="text-dark-color" />
            <div
              id="view-more"
              className="text-center text-dark-color pb-3 hover-text cursor-pointer"
            >
              <span className="px-2">مشاهده بیشتر</span>
              <RiArrowLeftFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;