import { MdOutgoingMail, MdWifiCalling3 } from 'react-icons/md';
import { FaTelegram, FaWhatsappSquare } from 'react-icons/fa';



export default function Header () {
    return (
        <div className={'header-cont'}>
            <div className={'header container'}>
                <div className={'logo-cont'}>
                    <h3>Optimum</h3><sub>DEV</sub>
                </div>
                <div className={'icon-cont'}>
                    <MdOutgoingMail className={'icon'}/>
                    <span>2601kadyr@gmail.com</span>
                </div>
                <div className={'icon-cont'}>
                    <MdWifiCalling3 className={'icon'}/>
                    <span>+380672152450</span>
                </div>
                <div className={'icon-cont'}>
                    <FaWhatsappSquare className={'n-icon'}/>
                    <FaTelegram className={'n-icon'}/>
                </div>
                <select className={'select'}>
                    <option value="" className={'opt'}>English</option>
                    <option value="" className={'opt'}>Русский</option>
                    <option value="" className={'opt'}>Украинский</option>
                </select>
            </div>
        </div>
    );
};
