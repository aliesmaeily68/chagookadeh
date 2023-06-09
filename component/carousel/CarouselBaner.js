import Carousel from "react-bootstrap/Carousel";
import Typewriter from "typewriter-effect";

function CarouselBaner() {
  return (
    <>
      <div className="Container-Carousel pt-4">
        <Carousel
          interval={5000}
          className=" Home-Carousel round bg-gradient "
        >
          <Carousel.Item className="bg-transparent Img-Carousel1">
            {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
            <img
              className="d-block Img-Carousel  w-50"
              src={"./images/1.png"}
              alt="First slide"
            />
            {/* </Link> */}
            <Carousel.Caption>
              {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
              <h2 className="Carousel-Title">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("کیفیت هرگز از مد نمی افتد !")
                      .start()
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("فروش به صورت کلی و جزئی")
                      .pauseFor(500)
                      .start();
                  }}
                  options={{ loop: true }}
                />
              </h2>
              {/* </Link> */}
              {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
              <p className="Carousel-Paragraph">
                ارسال سریع و رایگان برای خریدهای بالای 5 میلیون
              </p>
              {/* </Link> */}
              {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
              <button className="Carousel-Btn">خرید کن ! </button>
              {/* </Link> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bg-transparent Img-Carousel1">
            {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
            <img
              className="d-block Img-Carousel  w-50"
              src={"./images/2.png"}
              alt="First slide"
            />
            {/* </Link> */}
            <Carousel.Caption>
              {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
              <h2 className="Carousel-Title">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("کیفیت هرگز از مد نمی افتد !")
                      .start()
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("فروش به صورت کلی و جزئی")
                      .pauseFor(500)
                      .start();
                  }}
                  options={{ loop: true }}
                />
              </h2>
              {/* </Link> */}
              {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
              <p className="Carousel-Paragraph">
                ارسال سریع و رایگان برای خریدهای بالای 5 میلیون
              </p>
              {/* </Link> */}
              {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
              <button className="Carousel-Btn">خرید کن ! </button>
              {/* </Link> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bg-transparent Img-Carousel1">
            {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
            <img
              className="d-block Img-Carousel  w-50"
              src={"./images/3.png"}
              alt="First slide"
            />
            {/* </Link> */}
            <Carousel.Caption>
              {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
              <h2 className="Carousel-Title">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("کیفیت هرگز از مد نمی افتد !")
                      .start()
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("فروش به صورت کلی و جزئی")
                      .pauseFor(500)
                      .start();
                  }}
                  options={{ loop: true }}
                />
              </h2>
              {/* </Link> */}
              {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
              <p className="Carousel-Paragraph">
                ارسال سریع و رایگان برای خریدهای بالای 5 میلیون
              </p>
              {/* </Link> */}
              {/* <Link to={`/product/category:${product.MainCategory.title}`}> */}
              <button className="Carousel-Btn">خرید کن ! </button>
              {/* </Link> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselBaner;
