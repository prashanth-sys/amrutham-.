import { Component } from "react";
import Header from "../Header";
import { IoCheckmarkCircle } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogo } from "react-icons/pi";
import { CiTwitter, CiCalendar } from "react-icons/ci";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="bg-container">
          <div className="profile-card">
            <div className="profile-content-container">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713592615/Ellipse_727_riwaxs.png"
                alt="profile"
                className="profile-image"
              />
              <div className="all-over-details">
                <div className="details-content">
                  <div className="name-content">
                    <p className="doctor-name">Dr: Bruce Willis</p>
                    <IoCheckmarkCircle className="tick-icon" />
                  </div>
                  <p className="gynecologist">Gynecologist</p>
                  <div className="rating-content">
                    <p className="rating">4.2</p>
                    <img
                      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                      alt="start"
                      className="star-icon"
                    />
                    <img
                      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                      alt="start"
                      className="star-icon"
                    />
                    <img
                      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                      alt="start"
                      className="star-icon"
                    />
                  </div>
                </div>
                <div className="followers-content">
                  <p className="followers">Followers</p>
                  <p className="count">850</p>
                </div>
                <div className="following-content">
                  <p className="followers">Following</p>
                  <p className="count">18k</p>
                </div>
                <div className="posts-content">
                  <p className="followers">Posts</p>
                  <p className="count">850</p>
                </div>
                <button className="appointment" type="button">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
          <div className="sp">
            <div className="about-me-container">
              <div className="about-me-content">
                <h1 className="about-me">A Little About me</h1>
                <button className="follow-button" type="button">
                  Follow <AiOutlinePlus className="plus-icon" />
                </button>
              </div>
              <p className="about-me-description">
                Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
                Surat. love to work with all my hospital staff and seniour
                doctors. Completed my graduation in Gynaecologist Medicine from
                the{" "}
              </p>
              <hr Read More className="hr" />
              <div className="languages-spoken">
                <p className="languages">Languages Spoken</p>
                <button className="languages-button" type="button">
                  English
                </button>
                <button className="languages-button" type="button">
                  Hindi
                </button>
                <button className="languages-button" type="button">
                  Telugu
                </button>
              </div>
              <div className="social-media-app">
                <FiFacebook className="app" />
                <FaInstagram className="app" />
                <PiYoutubeLogo className="app" />
                <CiTwitter className="app" />
              </div>
            </div>

            <div className="appointment-container">
              <div className="appointment-fee-card">
                <p className="appointment-heading">Appointment Fee</p>
                <p className="appointment-amount">699.00</p>
              </div>
              <div className="select-session-card">
                <p className="session">Select your mode of session</p>
                <hr className="line-hr" />
              </div>
              <div className="treatment-container">
                <div className="treatment-type">
                  <p className="clinic">In-Clinic</p>
                  <p className="slots">45 slots</p>
                </div>
                <div className="treatment-video">
                  <p className="video">In-Video</p>
                  <p className="slots">45 slots</p>
                </div>
                <div className="treatment-type">
                  <p className="chat">In-Chat</p>
                  <p className="slots">10 slots</p>
                </div>
              </div>

              <div className="slot-container">
                <p className="session">Pick a time slot</p>
                <div className="calender-card">
                  <hr className="slot-hr" />
                  <CiCalendar />
                </div>
              </div>
              <div className="week-container">
                <IoArrowBackCircleOutline className="forward" />
                <div className="week-mon">
                  <p className="week-1">Mon, 10 Oct</p>
                  <p className="set-1">10 slots</p>
                </div>
                <div className="week-mon">
                  <p className="week-2">Tue, 11 Oct</p>
                  <p className="set-2">10 slots</p>
                </div>
                <div className="week-mon">
                  <p className="week-3">Wed, 12 Oct</p>
                  <p className="set-3">10 slots</p>
                </div>
                <IoArrowForwardCircleOutline className="forward" />
              </div>
              <div className="slot-container">
                <p className="morning">Morning</p>
              </div>
              <div className="timing-container">
                <div className="time-card">
                  <p className="time">09:00 AM</p>
                </div>
                <div className="time-card">
                  <p className="time">09:30 AM</p>
                </div>
                <div className="time-card">
                  <p className="time">10:00 AM</p>
                </div>
                <div className="time-card">
                  <p className="time">10:15 AM</p>
                </div>
                <div className="time-card">
                  <p className="time">10:45 AM</p>
                </div>
                <div className="present-time-card">
                  <p className="present-time">11:00 AM</p>
                </div>
              </div>
              <div className="slot-container">
                <p className="morning">Evening</p>
              </div>
              <div className="timing-container">
                <div className="time-card">
                  <p className="time">09:00 AM</p>
                </div>
                <div className="time-card">
                  <p className="time">09:30 AM</p>
                </div>
                <div className="time-card">
                  <p className="time">10:00 AM</p>
                </div>
                <div className="time-card">
                  <p className="time">10:15 AM</p>
                </div>
                <div className="time-card">
                  <p className="time">10:45 AM</p>
                </div>
              </div>
              <button type="button" className="appointment-token">
                Make An Appointment
              </button>
            </div>

            <div className="specialization-container">
              <h1 className="about-me">I Specialize In</h1>
              <div className="health-container">
                <div className="health-card">
                  <img
                    src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713686440/Frame_1000006268_hxex4i.png"
                    alt="health"
                    className="health-image"
                  />
                  <p className="treatment-name">Women's Health</p>
                </div>
                <div className="health-card">
                  <img
                    src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713686393/Frame_1000006269_u3twmq.png"
                    alt="health"
                    className="health-image"
                  />
                  <p className="treatment-name">Skin Care</p>
                </div>
                <div className="health-card">
                  <img
                    src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713686448/Frame_1000006270_quaa7r.png"
                    alt="health"
                    className="health-image"
                  />
                  <p className="treatment-name">Immunity</p>
                </div>
                <div className="health-card">
                  <img
                    src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713686460/Frame_1000006271_wjkqjz.png"
                    alt="health"
                    className="health-image"
                  />
                  <p className="treatment-name">Hair Care</p>
                </div>
              </div>
            </div>

            <div className="concern-treat-container">
              <h1 className="about-me">The Concern I Treat</h1>
              <div className="treat-concern-card">
                <div className="treat-card">
                  <p>Skin Treatment</p>
                </div>
                <div className="treat-card">
                  <p>Pregnancy</p>
                </div>
                <div className="treat-card">
                  <p>Period Doubts</p>
                </div>
                <div className="treat-card">
                  <p>Endometriosis</p>
                </div>
                <div className="treat-card">
                  <p>Pelvic Pain</p>
                </div>
                <div className="treat-card">
                  <p>Ovarian Cysts</p>
                </div>
                <div className="treat-card">
                  <p>+ 5 More</p>
                </div>
              </div>
            </div>

            <div className="work-experience-container">
              <h1 className="about-me">My Work Experience</h1>
              <p className="experience">I HAVE BEEN IN PRACTICE AT 7+ YEARS</p>
              <hr className="hr" />
              <div className="clinic-container">
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713765174/Frame_1000006314_ssqp1b.png"
                  alt="sps"
                  className="logo"
                />
                <div className="name-card">
                  <p className="medical">Midtown Medical Clinic</p>
                  <p className="senior">Senior doctor</p>
                </div>
              </div>
              <div className="clinic-container">
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713765174/Frame_1000006314_ssqp1b.png"
                  alt="sps"
                  className="logo"
                />
                <div className="name-card">
                  <p className="medical">Midtown Medical Clinic</p>
                  <p className="senior">Senior doctor</p>
                </div>
              </div>
            </div>

            <div className="feature-review-container">
              <h1 className="about-me">Featured Reviews (102)</h1>
              <div className="comments-container">
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713767951/Frame_2608514_1_utjs1x.png"
                  alt="comment"
                  className="comment-image"
                />
                <div>
                  <p className="comment-name">Alicent Hightower</p>
                  <p className="comment-type">Consulted for Skin care</p>
                </div>
              </div>
              <div className="star-content">
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                  alt="start"
                  className="star-icon"
                />
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                  alt="start"
                  className="star-icon"
                />
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                  alt="start"
                  className="star-icon"
                />
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                  alt="start"
                  className="star-icon"
                />
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                  alt="start"
                  className="star-icon"
                />
              </div>
              <p className="comment">
                Might be bit early to confirm but yes I can see noticeable
                difference in my hairfall. will write again after using it for
                longer periods
              </p>

              <div className="comments-container">
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713767951/Frame_2608514_1_utjs1x.png"
                  alt="comment"
                  className="comment-image"
                />
                <div>
                  <p className="comment-name">Alicent Hightower</p>
                  <p className="comment-type">Consulted for Skin care</p>
                </div>
              </div>
              <div className="star-content">
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                  alt="start"
                  className="star-icon"
                />
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                  alt="start"
                  className="star-icon"
                />
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                  alt="start"
                  className="star-icon"
                />
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                  alt="start"
                  className="star-icon"
                />
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1713595262/Vector_4_uogod6.png"
                  alt="start"
                  className="star-icon"
                />
              </div>
              <p className="comment">
                Might be bit early to confirm but yes I can see noticeable
                difference in my hairfall. will write again after using it for
                longer periods
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
