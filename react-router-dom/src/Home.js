import styles from "./Home.module.css"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import exampleCarouselImage1 from './components/images/fruits.jpg';
import exampleCarouselImage2 from './components/images/grapes.jpg';
import exampleCarouselImage3 from './components/images/burger.jpg';
import exampleCarouselImage4 from './components/images/burger1.png';
import exampleCarouselImage5 from './components/images/buger2.png';
import {  Card } from 'antd';
import { Image } from 'react-bootstrap';

export default function Home({products}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (<div className={styles.HomePageContainer}>
        <h1 className={styles.HomePageHeading}>WellCome to Our Fresher Food Store</h1>
        <Carousel activeIndex={index} onSelect={handleSelect} className={styles.myCarousel}>
            <Carousel.Item>
                <Image src={exampleCarouselImage1} text="banana" className={styles.myCarouselImages} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={exampleCarouselImage2} text="banana" className={styles.myCarouselImages} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={exampleCarouselImage3} text="banana" className={styles.myCarouselImages} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={exampleCarouselImage4} text="banana" className={styles.myCarouselImages} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={exampleCarouselImage5} text="banana" className={styles.myCarouselImages} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className={styles.allProductHome}>
            {products.map((item) =>  <Card  key={Math.random()} className={styles.cardsHome}>
      <Image className={styles.cardsImages} src={item.image_url} />
      <h4 className={styles.cardTitle}>{item.title.slice(0,19)}..</h4>

    </Card> )}
        </div>
    </div>)
}