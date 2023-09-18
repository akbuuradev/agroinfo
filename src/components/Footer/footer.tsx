import React from 'react';
import { AiOutlineInstagram,AiOutlineFacebook } from 'react-icons/ai';
import { RiTwitterLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import "./footer.scss"

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <h1>AGROINFO.KG</h1>
                    <p>АгроИнфо.КГ— информационная поддержка сельского хозяйства и пищевой промышленностю</p>
                    <div className='footer--line'></div>
                    <Link to={"/"}><AiOutlineInstagram/></Link>
                    <Link to={"/"}><RiTwitterLine/></Link>
                    <Link to={"/"}><AiOutlineFacebook/></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;