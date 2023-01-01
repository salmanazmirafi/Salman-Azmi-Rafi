import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.twitter.com/salmanazmirafi" target="_blank">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/salmanazmirafi" target="_blank">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/salmanazmirafi" target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
