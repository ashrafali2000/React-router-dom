import styles from "./Home.module.css"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import exampleCarouselImage from './components/images/fruits.jpg';
import { Image } from 'react-bootstrap';
export default function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (<div className={styles.HomePageContainer}>
        <h1 className={styles.HomePageHeading}>WellCome to Our Fresh Fruit Store</h1>
        <Carousel activeIndex={index} onSelect={handleSelect} className={styles.myCarousel}>
            <Carousel.Item>
                <Image src={exampleCarouselImage} text="banana" className={styles.myCarouselImages} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={exampleCarouselImage} text="banana" className={styles.myCarouselImages} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={exampleCarouselImage} text="banana" className={styles.myCarouselImages} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>)
}