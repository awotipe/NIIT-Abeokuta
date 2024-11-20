import React, {Component} from 'react'
import classes from "./Testimonials.module.css";
import Adesina from "../../Assests/adesina.png";
import Taiwo from "../../Assests/Taiwo.png";
import William from "../../Assests/William.png";
import Slider from "react-slick";

export default class Testimonials extends Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
          fade: false,
          speed: 6000,
          autoplaySpeed: 5000,
          cssEase: "linear",
        };
    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <h2>TESTIMONIALS</h2>
                <Slider {...settings} className={classes.slider}>
                <div className={classes.testimonySlide}>
                    <div className={classes.paragraph}>
                        <p>"Before coming to NIIT, I had only Microsoft Office and Graphic Design skills. But after spending 12 Months in NIIT, I have achieved a lot. With great joy, now I can prouldy say I have acquired Java programing and Web Development Skills."</p>
                    </div>
                    <div className={classes.wrap}>
                        <div className={classes.clientImage}>
                            <img src={Adesina} alt="Adesina" />
                        </div>
                        <div className={classes.clientName}>
                            <h5>Adesina Oluwayanmife Justified</h5>
                            <p>SOFTWARE ENGINEER</p>
                        </div>
                    </div>
                </div>
                <div className={classes.testimonySlide}>
                    <div className={classes.paragraph}>
                        <p>"Before coming to NIIT, I had only Microsoft Office and Graphic Design skills. But after spending 12 Months in NIIT, I have achieved a lot. With great joy, now I can prouldy say I have acquired Java programing and Web Development Skills."</p>
                    </div>
                    <div className={classes.wrap}>
                        <div className={classes.clientImage}>
                            <img src={Taiwo} alt="Adesina" />
                        </div>
                        <div className={classes.clientName}>
                            <h5>Adesina Oluwayanmife Justified</h5>
                            <p>SOFTWARE ENGINEER</p>
                        </div>
                    </div>
                </div>
                <div className={classes.testimonySlide}>
                    <div className={classes.paragraph}>
                        <p>"Before coming to NIIT, I had only Microsoft Office and Graphic Design skills. But after spending 12 Months in NIIT, I have achieved a lot. With great joy, now I can prouldy say I have acquired Java programing and Web Development Skills."</p>
                    </div>
                    <div className={classes.wrap}>
                        <div className={classes.clientImage}>
                            <img src={William} alt="Adesina" />
                        </div>
                        <div className={classes.clientName}>
                            <h5>Adesina Oluwayanmife Justified</h5>
                            <p>SOFTWARE ENGINEER</p>
                        </div>
                    </div>
                </div>
                </Slider>
            </div>
        </div>
    )
}
}
