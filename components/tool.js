import python from '../public/python.png'
import django2 from '../public/djangoproject.png'
import fastapi from '../public/fastapi.png'
import javascriptimg from '../public/javascript.png'
import reactimg from '../public/react.png'
import nextjsimg from '../public/NextjsLogo.svg'
import golangimg from '../public/Go-Logo_Aqua.png'
import gin from '../public/gin.png'
import Image from "next/image";


const Tool = () => {
    return (
        <div className={'tool-cont'}>
            <div className={'tools container'}>
                <h1>Skills</h1>
                <div className={'lang'} style={{marginTop: '0'}}>
                    <div data-aos="fade-up" className={'tool'}>
                        <div className={'logo'}>
                            <Image src={python} alt={''}/>
                        </div>
                        <span className={'name'}>Python</span>
                    </div>
                    <div data-aos="fade-up" className={'tool'}>
                        <div className={'logo'}><Image src={django2} alt={''}/></div>
                        <span className={'name'}>Django<br/>Rest Framework</span>
                    </div>
                    <div data-aos="fade-up" className={'tool'}>
                        <div className={'logo'}><Image src={fastapi} alt={''}/></div>
                        <span className={'name'}>FastAPI</span>
                    </div>
                </div>
                <div className={'lang'}>
                    <div data-aos="fade-up" className={'tool'}>
                        <div className={'logo'}>
                            <Image src={javascriptimg} alt={''}/>
                        </div>
                        <span className={'name'}>JavaScript</span>
                    </div>
                    <div data-aos="fade-up" className={'tool'}>
                        <div className={'logo'}><Image src={reactimg} alt={''}/></div>
                        <span className={'name'}>React,<br/>React Native</span>
                    </div>
                    <div data-aos="fade-up" className={'tool'}>
                        <div className={'logo'}><Image src={nextjsimg} alt={''}/></div>
                        <span className={'name'}>NEXT.js</span>
                    </div>
                </div>
                <div className={'lang'}>
                    <div data-aos="fade-up" className={'tool'}>
                        <div className={'logo'}>
                            <Image src={golangimg} alt={''}/>
                        </div>
                        <span className={'name'}>GO</span>
                    </div>
                    <div data-aos="fade-up" className={'tool'}>
                        <div className={'logo'}><Image src={gin} alt={''}/></div>
                        <span className={'name'}>Gin<br/>Web Framework</span>
                    </div>
                    <div className={'tool'} style={{visibility: 'hidden'}}>
                        <div className={'logo'}><Image src={reactimg} alt={''}/></div>
                        <span className={'name'}>React<br/>React Native</span>
                    </div >
                </div>
            </div>
        </div>
    );
};

export default Tool;