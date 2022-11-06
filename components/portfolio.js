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
import {useEffect, useState} from "react";





const Portfolio = ({id}) => {

    let pArr = [p1, p2, p3]

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true
    };

    const mobSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    const [size, setSize] = useState()

    useEffect(() => {
        const size = window.innerWidth;
        setSize(size)
    })

    return (
        <div className={'portfolio-cont container'} id={id}>
            <h1>Portfolio</h1>
            <div className={'projects'}>
                <div className={'project-l'}>
                    <div className={'left'}  data-aos="fade-right">
                        <ul style={{paddingLeft: '25px', paddingTop: '20px'}}>
                            <li>Landing Page</li>
                            <li>Corporate website</li>
                            <li>Web platform</li>
                            <li>Online store</li>
                            <li>E-commerce</li>
                        </ul>
                    </div>
                    <div className={'right'} data-aos="fade-left">
                        {size && size < 992 ?
                            <Slider {...mobSettings}>
                                {pArr?.map((item, index) => (
                                    <div className={'p-img-cont'} key={index}>
                                        <Image src={item} alt={''} onClick={() => console.log('pp')}/>
                                    </div>
                                ))}
                            </Slider> :
                            <Slider {...settings}>
                                {pArr?.map((item, index) => (
                                    <div className={'p-img-cont'} key={index}>
                                        <Image src={item} alt={''} onClick={() => console.log('pp')}/>
                                    </div>
                                ))}
                            </Slider>
                        }
                    </div>
                </div>
                <div className={'project-r'}>
                    <div className={'left'}  data-aos="fade-right">
                        {size && size < 992 ?
                            <Slider {...mobSettings}>
                                <div className={'p-img-cont'}>
                                    <Image src={m1} alt={''} style={{objectFit: 'contain'}}/>
                                </div>
                                <div className={'p-img-cont'}>
                                    <Image src={m2} alt={''} style={{objectFit: 'contain'}}/>
                                </div>
                            </Slider> :
                            <Slider {...settings}>
                                <div className={'p-img-cont'}>
                                    <Image src={m1} alt={''} style={{objectFit: 'contain'}}/>
                                </div>
                                <div className={'p-img-cont'}>
                                    <Image src={m2} alt={''} style={{objectFit: 'contain'}}/>
                                </div>
                            </Slider>
                        }

                    </div>
                    <div className={'right'} data-aos="fade-left">
                        <ul style={{paddingLeft: '25px', paddingTop: '20px'}}>
                            <li>Development of Mobile Applications for IOS and Android</li>
                        </ul>
                    </div>
                </div>
                <div className={'project-l'}>
                    <div className={'left'}  data-aos="fade-right">
                        <ul style={{paddingLeft: '25px', paddingTop: '20px'}}>
                            <li>Development of CRM systems</li>
                            <li>Development of ERP systems</li>
                        </ul>
                    </div>
                    <div className={'right'} data-aos="fade-left">
                        {size && size < 992 ?
                            <Slider {...mobSettings}>
                                <div className={'p-img-cont'}>
                                    <Image src={crm} alt={''}/>
                                </div>
                                <div className={'p-img-cont'}>
                                    <Image src={crm2} alt={''}/>
                                </div>
                                <div className={'p-img-cont'}>
                                    <Image src={crm3} alt={''}/>
                                </div>
                            </Slider> :
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
                        }

                    </div>
                </div>
                <div className={'project-r'}>
                    <div className={'left'}  data-aos="fade-right">
                        {size && size < 992 ?
                            <Slider {...mobSettings}>
                                <div className={'p-img-cont'}>
                                    <Image src={chat} alt={''}/>
                                </div>
                                <div className={'p-img-cont'}>
                                    <Image src={chat2} alt={''}/>
                                </div>
                                <div className={'p-img-cont'}>
                                    <Image src={chat3} alt={''}/>
                                </div>
                            </Slider> :
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
                        }

                    </div>
                    <div className={'right'} data-aos="fade-left">
                        <ul style={{paddingLeft: '25px', paddingTop: '20px'}}>
                            <li>Development of chat messengers</li>
                            <li>Mail system development</li>
                            <li>
                                Development of Chatbots that will optimize your business, increase loyalty (by automatically notifying and communicating with your customers without waiting for managers to do this), connect to your CRM and notify you and your managers.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;