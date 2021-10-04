import React from "react";
import Footer from "../footer/Footer";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="aboutwrapper">
        <h1 className="abouttitle">ABOUT US:</h1>
        <div className="allpara">
          <p className="aboutpara">
            ONLINE AUCTION SYSTEM is a reputed organization in Bangladesh. This
            organization has been successfully doing business honestly for a
            long time and has been able to gain the trust of the users.
          </p>

          <p className="aboutpara">
            We organize auctions of consumer products virtually. The user buys
            the product through auction. The winner of the auction came to the
            office and collected the goods.
          </p>
          <p className="aboutpara">
            We are the first company in Bangladesh to organize a virtual
            auction. Thank you all for being with us.
          </p>
        </div>
        <div className="trem">Terms and Conditions</div>
        <ul>
          <li className="tremli">
            1 / You have to create an account first and take membership.
          </li>
          <li className="tremli">
            2 / If you want to sell, you have to mention it while creating the
            account.
          </li>
          <li className="tremli">
            3 / You have to take part in the auction at the scheduled time for
            the auction of the product.{" "}
          </li>
          <li className="tremli">
            4 / Know all the information of the product from the advertisement.
          </li>
          <li className="tremli">
            5 / If any member finds proof of dishonesty, the membership will be
            canceled in the first instance.
          </li>
          <li className="tremli">
            6 / The winner must collect the product from the office within 15
            working days.
          </li>
          <li className="tremli">
          7 / If the winning product fails in time, legal action will be taken against him.
          </li>
          <li className="tremli">
          8 / The organization can change any decision and rules.
          </li>
          
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default About;
