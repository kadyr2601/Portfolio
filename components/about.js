import Image from "next/image";
import me from '../public/IMG_6896.webp'
import Link from "next/link";


const About = () => {
    return (
        <div className={'about-cont'}>
            <div className={'about container'}>
                <div className={'left'}>
                    <div className={'author'}>
                        <Image src={me} alt={'me'} />
                    </div>
                </div>
                <div className={'right'}>
                    <h3 data-aos="fade-up">HI THERE !</h3>
                    <h1 data-aos="fade-up">I'm Kadyr Atamuradov</h1>
                    <span data-aos="fade-up">I'm a full stack developer based in Kiev, Ukraine. I strives to build
                        immersive and beautiful web applications through carefully crafted code and user-centric design.
                    </span>
                    <div className={'btn-case'}>
                        <div className={'btn'}>MORE ABOUT ME</div>
                        <Link href="#portfolio" className={'btn'}>PORTFOLIO</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;