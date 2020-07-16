import React from "react"
import { Layout } from "antd"
import './Footer.css'
import { ThemeContext } from "../../../GlobalEnvironment/contextInit"
import { MailOutlined,MailFilled,PhoneOutlined,PhoneFilled,HomeFilled,HomeOutlined } from '@ant-design/icons';
import {
  useHistory
} from "react-router-dom";

const { Footer } = Layout;

function MyFooter(props) {
  let history = useHistory()
  return (
    <ThemeContext.Consumer>
      {colorsState =>
        <Footer>
          <div className="site-footer" style={{ backgroundColor: colorsState.colors.color2, color: colorsState.colors.color3 }}>
            <div className="container-footer">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <h6 style={{ color: colorsState.colors.color3 }}>About</h6>
                  <p className="text-justify">Flight 380 comprises a team of professionals and individuals who have been working in the travel trade for over a decade. Flight 380 Company was started in 2018, with just one department for Umrah Packages, but since then it has gradually expanded its base and is now a fully dedicated travel house. Flight 380 is a complete tourist friendly advisory that helps individual and families to find best holiday sites, cruise or travel deals, travel discounts and travel adventures, hotel bookings, ticketing and visa facility.</p>
                </div>

                <div className="col-xs-6 col-md-3">
                  <h6 style={{ color: colorsState.colors.color3 }}>Quick Links</h6>
                  <ul className="footer-links" style={{ color: colorsState.colors.color3 }}>
                    <li><a style={{ color: colorsState.colors.color3 }} onClick={() => history.push("/")}>Home</a></li>
                    <li><a style={{ color: colorsState.colors.color3 }} onClick={() => history.push("/about")}>About Us</a></li>
                    <li><a style={{ color: colorsState.colors.color3 }} onClick={() => history.push("/services")}>Our Services</a></li>
                    <li><a style={{ color: colorsState.colors.color3 }} onClick={() => history.push("/blogs")}>Blogs</a></li>
                    <li><a style={{ color: colorsState.colors.color3 }} onClick={() => history.push("/contact")}>Contact Us</a></li>
                  </ul>
                </div>
                <div className="col-xs-6 col-md-3">
                  <h6 style={{ color: colorsState.colors.color3 }}>Contact With Us</h6>
                  <ul className="footer-links" style={{ color: colorsState.colors.color3 }}>
                    <li>
                      <a href="mailto:INFO@MKGLOBAL.CO.UK" target="_blank" style={{ color: colorsState.colors.color3 }}>
                        {/* <img
                          src="https://res.cloudinary.com/owaisraza/image/upload/v1567183382/Flight%20380/mail_lhhlph.svg"
                          alt="E-mail"
                          className="footer-pngs"
                        /> */}
                        {colorsState.type==="light"?<MailFilled/>:<MailOutlined/>}
                        <div className="h4Class"> INFO@MKGLOBAL.CO.UK</div>
                      </a>
                    </li>
                    <li>
                      <a className="anchorChildEff" title="01908 220 000" href="tel:+004401908220000" target="_blank" style={{ color: colorsState.colors.color3 }}>
                        {/* <img
                          src="https://res.cloudinary.com/owaisraza/image/upload/v1567183436/Flight%20380/phone-call_feeswr.svg"
                          className="footer-pngs"
                          alt="Phone"
                        /> */}
                        {colorsState.type==="light"?<PhoneFilled/>:<PhoneOutlined/>}
                        <div className="h4Class"> 01908 220 000</div>
                      </a>
                    </li>
                    <li>
                      <div title="Flight 380 14 Church St, Wolverton, Milton Keynes MK12 5JN, UK">
                        <div className="anchorChildEff" title="Flight 380 14 Church St, Wolverton, Milton Keynes MK12 5JN, UK">
                          <a href="https://www.google.com/maps/place/MK+GLOBAL+TRAVEL+%26+MONEY+TRANSFER/@52.0625271,-0.8109615,17z/data=!3m1!4b1!4m5!3m4!1s0x487700f8186310d3:0x4056625e2badb3d4!8m2!3d52.0625271!4d-0.8087728" target="_blank" title="Flight 380 14 Church St, Wolverton, Milton Keynes MK12 5JN, UK" style={{ color: colorsState.colors.color3 }}>
                            {/* <img
                              src="https://res.cloudinary.com/owaisraza/image/upload/v1567183423/Flight%20380/home_kkn1na.svg"
                              alt=""
                              className="imgClassFooter footer-pngs"
                              align="left"
                            /> */}
                            {colorsState.type==="light"?<HomeOutlined/>:<HomeFilled/>}
                            <div className="h4Class"> Flight 380 14 Church St, Wolverton, Milton Keynes MK12 5JN, UK</div>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <hr />
            </div>
            <div className="container-footer">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
         <a> Flight380</a>.
            </p>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="social-icons">
                    <li><a href="https://www.facebook.com/mkglobaltravel/" target="_blank" className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/MKGLOBAL13" target="_blank" className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>


              </div>
            </div>
          </div>
        </Footer>
      }
    </ThemeContext.Consumer>
  )
}

export default MyFooter