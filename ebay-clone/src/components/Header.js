import React from "react";
import "../styles/header.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <>
      <div className="header">
        <div className="topHeader">
          <div className="topHeader_left">
            <span className="header_topLineOne">
              Hi!{" "}
              <a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2F">
                Sign in
              </a>{" "}
              or{" "}
              <a href="https://signup.ebay.com/pa/crte?ru=https%3A%2F%2Fwww.ebay.com%2F">
                register
              </a>
            </span>
            <span className="header_topLineTwo">Daily Deals</span>
            <span className="header_topLineThree">Help & Contact</span>
          </div>
          <div className="topHeader_right">
            <span className="header_topLineOne">Sell</span>
            <span className="header_topLineTwo">Watchlist</span>
            <span className="header_topLineThree">My eBay</span>
            <span className="header_topLineFour">
              <NotificationsNoneIcon className="notificationIcon" />
            </span>
            <span className="header_topLineFive">
              <ShoppingCartIcon className="cartIcon" />
            </span>
          </div>
        </div>
        <hr className="firstHr" />
        <div className="midHeader">
          <img
            className="img_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/EBay_logo.png"
            alt="logo"
          />
          <span className="header_firstOne">Shop by category</span>
          <input
            className="header_secondOne"
            type="text"
            placeholder="Search for anything"
          />
          <span>
            <select className="header_selectCategory">
              <option value="0">All Categories</option>
              <option value="0">Antiques</option>
              <option value="0">Art</option>
              <option value="0">Baby</option>
              <option value="0">Books</option>
              <option value="0">Business &amp; Industrial</option>
              <option value="0">Cameras &amp; Photos</option>
              <option value="0">Cell Phones &amp; Accessories</option>
              <option value="0">Clothing, Shoes &amp; Accessories</option>
              <option value="0">Coins &amp; Paper Money</option>
              <option value="0">Collectibles</option>
              <option value="0">Computers/Tablets &amp; Networking</option>
              <option value="0">Consumer Electronics</option>
              <option value="0">Crafts</option>
              <option value="0">Dolls & Bears</option>
              <option value="0">DVDs &amp; Movies</option>
              <option value="0">eBay Motors</option>
              <option value="0">Entertainment Memorabilia</option>
              <option value="0">Gift Cards &amp; Coupons</option>
              <option value="0">Health &amp; Beauty</option>
              <option value="0">Jewelery &amp; Watches</option>
              <option value="0">Music</option>
              <option value="0">Musical Instruments &amp; Gear</option>
              <option value="0">Pet Supplies</option>
              <option value="0">Pottery &amp; Glass</option>
              <option value="0">Real Estate</option>
              <option value="0">Speciality Services</option>
              <option value="0">Sporting Goods</option>
              <option value="0">Sports Mem, Cards &amp; Fan Shop</option>
              <option value="0">Stamp</option>
              <option value="0">Tickets &amp; Experiences</option>
              <option value="0">Toys &amp; Hobbies</option>
              <option value="0">Travel</option>
              <option value="0">Video Games &amp; Controls</option>
              <option value="0">Everything Else</option>
            </select>
          </span>
          <span className="searchBtn">
            <button>Search</button>
          </span>
        </div>
        <br />
        <hr className="secondHr" />
      </div>
    </>
  );
}

export default Header;
