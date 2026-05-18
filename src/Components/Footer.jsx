import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      {/* footer */}
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Social Login</h6>
          <a className="link link-hover flex gap-2 items-center"><BsFacebook></BsFacebook> Facebook</a>
          <a className="link link-hover flex gap-2 items-center"><FaInstagramSquare></FaInstagramSquare> Instagram</a>
          <a className="link link-hover flex gap-2 items-center"><FiTwitter></FiTwitter> Twitter</a>
          <a className="link link-hover flex gap-2 items-center"><SiWhatsapp></SiWhatsapp> Whatsapp</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to='/about' className="link link-hover">About</Link>
          <Link to='/profile' className="link link-hover">Profile</Link>
          <Link to='/auth/login' className="link link-hover">Login</Link>
          <Link to='/auth/resister' className="link link-hover">Resister</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
