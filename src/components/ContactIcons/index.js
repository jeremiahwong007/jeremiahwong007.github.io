import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const ContactIcons = (props) => {
    return (
        <div className="w-full mx-auto max-w-screen-xl flex pt-2 items-center justify-between">
            <ul onMouseEnter={props.textEnter} onMouseLeave={props.textLeave} className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                <li className="mr-4 md:mr-6">
                    <a href="https://www.linkedin.com/in/jeremy-wong-70b9301b5/">
                        <BsLinkedin className="h-5 w-5 mr-1" aria-hidden="true" />
                    </a>
                </li>
                <li className="mr-4 md:mr-6">
                    <a href="https://github.com/jeremiahwong007">
                        <BsGithub className="h-5 w-5 mr-1" aria-hidden="true" />
                    </a>
                </li>
                <li className="mr-4 md:mr-6">
                    <a href="https://www.instagram.com/jeremyh.wong/">
                        <BsInstagram className="h-5 w-5 mr-1" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="mailto: jeremiahwong007@gmail.com">
                        <MdEmail className="h-5 w-5 mr-1" aria-hidden="true" />
                    </a>
                </li>
            </ul>
        </div>

        );
}

export default ContactIcons;