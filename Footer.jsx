import styles from './Footer.module.css';
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer=()=>{
    return(<>
    <div className={styles.container}>
    <div className={styles.footer}>
          <div>
            <img className={styles.logo} src="https://t3.ftcdn.net/jpg/02/45/84/16/360_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg"></img>
            <p className={styles.heading}>Shoppy</p>
            <p className={styles.text}>You only live once, but if you do it right, once is enough.</p>
          </div>
          <ul>
            <li className={styles.heading}>Download</li>
            <li>Windows App</li>
            <li>Mac App</li>
            <li>Linux App</li>
            <li>Desktop App</li>
            <li className={styles.heading}>Services</li>
            <li>Design</li>
            <li>Development</li>
          </ul> 
          <ul>
          <li className={styles.heading}>Product</li>
            <li>Web</li>
            <li>App</li>
            <li>Software</li>
            <li>Ecommerce</li>
            <li className={styles.heading}>Company</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul> 
          <div>
            <h5>Get in Touch</h5>
            <div className={styles.media}>
                <a><FaFacebookF/></a>
                <a><FaXTwitter/></a>
                <a><FaInstagram/></a>
                <a><FaLinkedin/></a>
            </div>
            <div className={styles.heading}>Subscribe</div>
            <input type="text" placeholder='xyz@gmail.com' className={styles.input}></input>
            <button className={styles.btn}>Submit</button>
          </div>
    </div>
    <hr style={{color:"white"}}/>
    <center><FaRegCopyright/> 2022 Glossy,All Right Reserved</center>
    </div>
    </>)
}

export default Footer;