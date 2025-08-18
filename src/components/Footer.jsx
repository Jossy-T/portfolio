import { FaBeer, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTelegram } from 'react-icons/fa';
import { FaMessage, FaPadlet, FaVoicemail } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
export default function Footer(){
    return<div className='footer'>
        <div className='footer2'>
            <h3><a href="https://t.me/@y1o2s3e4" target='_blank' rel='noopener noreferrer'><FaTelegram /></a> </h3>
            <h3><a href="https://www.instagram.com/username" target='_blank' rel='noopener noreferrer'><FaInstagram /></a> </h3>
            <h3><a href="https://www.linkedin.com/useername" target='_blank' rel='noopener noreferrer'><FaLinkedin /></a> </h3>
            <h3><a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer"><FaGithub/></a></h3>
        </div>

        <div className='phone-message'>
            <h3><a href="mailto:yoseftanu994@gmail.com"><MdEmail/>: yoseftanu994@gmail.com</a></h3>
            <h3><FaPhone/>: +251 985175239</h3>
        </div>


        <h4 style={{color:"white", textAlign:"center",}}>2025 portfolio. All rights are reserved</h4>
    </div>

}