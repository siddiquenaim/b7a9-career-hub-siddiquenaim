import React from "react";
import "./Footer.css";
import facebook from "../../images/icon/fb.png";
import twitter from "../../images/icon/twitter.png";
import youtube from "../../images/icon/youtube.png";

const Footer = () => {
  return (
    <div className="bg-[#1A1919] text-white mt-10">
      <div className="w-[70%] lg:w-[95%] mx-auto">
        <div className="mx-auto pt-16 lg:pt-32 pb-16 lg:flex gap-20">
          <div className="lg:w-[23%]">
            <h3 className="text-3xl font-extrabold">Job Hunters</h3>
            <p className="my-5 footer-description">
              Every challenge is an opportunity to grow and improve. Embrace the
              journey towards your dream career. Believe in yourself and keep
              pushing forward!
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/naimsiddique26/"
                target="_blank"
              >
                <img src={facebook} className="cursor-pointer" alt="" />
              </a>
              <a
                href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
              >
                <img src={twitter} className="cursor-pointer" alt="" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCjTVOpNEBMMPvHhVxDQMy5Q"
                target="_blank"
              >
                <img src={youtube} className="cursor-pointer" alt="" />
              </a>
            </div>
          </div>
          <div className="lg:w-[77%] mx-auto grid lg:grid-cols-4 mt-5 lg:mt-0">
            <div className="my-4 lg:my-0">
              <h3 className="footer-name mb-3">Company</h3>
              <p className="footer-description">About Us</p>
              <p className="my-2 footer-description">Works</p>
              <p className="footer-description">Latest News</p>
              <p className="my-2 footer-description">Career</p>
            </div>
            <div>
              <h3 className="footer-name mb-3">Product</h3>
              <p className="footer-description">Prototype</p>
              <p className="my-2 footer-description">Plans and Pricing</p>
              <p className="footer-description">Customers</p>
              <p className="my-2 footer-description">Integrations</p>
            </div>
            <div className="my-4 lg:my-0">
              <h3 className="footer-name mb-3">Support</h3>
              <p className="footer-description">Help Desk</p>
              <p className="my-2 footer-description">Sales</p>
              <p className="footer-description">Become a Partner</p>
              <p className="my-2 footer-description">Developers</p>
            </div>
            <div>
              <h3 className="footer-name mb-3">Contact</h3>
              <p className="footer-description">
                524 Broadway , Uttara, Dhaka-1230
              </p>
              <p className="my-2 footer-description">+880 1984-344636</p>
            </div>
          </div>
        </div>
        <hr className="divider-footer" />
        <div className="footer-end-text lg:flex justify-between pb-12">
          <p>
            @2023 <span className="font-semibold">JobHunters</span>. All Rights
            Reserved.
          </p>
          <p className="mt-4 lg:mt-0">
            Powered by <span className="font-semibold">JobHunters</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
