import Slider from "react-slick";
import Image from "next/image";
import p1 from '../public/p1.png'
import p2 from '../public/p2.png'
import p3 from '../public/p3.png'
import m1 from '../public/m1.jpg'
import m2 from '../public/m2.jpg'
import crm from '../public/crm.png'
import crm2 from '../public/crm2.png'
import crm3 from '../public/crm3.png'
import chat from '../public/chat.png'
import chat2 from '../public/chat2.png'
import chat3 from '../public/chat3.png'




const Portfolio = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true
    };

    return (
        <div className={'portfolio-cont container'}>
            <h1>Portfolio</h1>
            <div className={'projects'}>
                <div className={'project-l'}>
                    <div className={'left'}  data-aos="fade-right">
                    </div>
                    <div className={'right'} data-aos="fade-left">
                        <Slider {...settings}>
                            <div className={'p-img-cont'}>
                                <Image src={p1} alt={''}/>
                            </div>
                            <div className={'p-img-cont'}>
                                <Image src={p2} alt={''}/>
                            </div>
                            <div className={'p-img-cont'}>
                                <Image src={p3} alt={''}/>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className={'project-r'}>
                    <div className={'left'}  data-aos="fade-right">
                        <Slider {...settings}>
                            <div className={'p-img-cont'}>
                                <Image src={m1} alt={''} style={{objectFit: 'contain'}}/>
                            </div>
                            <div className={'p-img-cont'}>
                                <Image src={m2} alt={''} style={{objectFit: 'contain'}}/>
                            </div>
                        </Slider>
                    </div>
                    <div className={'right'} data-aos="fade-left">
                    </div>
                </div>
                <div className={'project-l'}>
                    <div className={'left'}  data-aos="fade-right">
                    </div>
                    <div className={'right'} data-aos="fade-left">
                        <Slider {...settings}>
                            <div className={'p-img-cont'}>
                                <Image src={crm} alt={''}/>
                            </div>
                            <div className={'p-img-cont'}>
                                <Image src={crm2} alt={''}/>
                            </div>
                            <div className={'p-img-cont'}>
                                <Image src={crm3} alt={''}/>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className={'project-r'}>
                    <div className={'left'}  data-aos="fade-right">
                        <Slider {...settings}>
                            <div className={'p-img-cont'}>
                                <Image src={chat} alt={''}/>
                            </div>
                            <div className={'p-img-cont'}>
                                <Image src={chat2} alt={''}/>
                            </div>
                            <div className={'p-img-cont'}>
                                <Image src={chat3} alt={''}/>
                            </div>
                        </Slider>
                    </div>
                    <div className={'right'} data-aos="fade-left">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;