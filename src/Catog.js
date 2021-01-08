import React from "react";
import "./Catog.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import LanguageIcon from "@material-ui/icons/Language";
import TranslateIcon from "@material-ui/icons/Translate";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Catog() {
  return (
    <>
      <div className="container cat_bar">
        <div className="row ">
          {/* home */}
          <div className="col-xs-2 block_item">
            <div className="dropdown">
              <span className="option">
                <HomeIcon className="icons" />
                <Link to="/" className="home_cat_links">
                  Home
                </Link>
              </span>
            </div>
          </div>

          {/* movie */}
          <div className="col-xs-2">
            <div className="dropdown">
              <span className="option">
                <MovieIcon className="icons" />
                Movies
                <ArrowDropDownIcon className="icons" />
              </span>
              <div className="dropdown_content">
                <p>
                  <Link to="#" className="cat_links">
                    Bollywood
                  </Link>
                </p>
                <p>
                  <Link to="#" className="cat_links">
                    Hollywood
                  </Link>
                </p>
                <p>
                  <Link to="#" className="cat_links">
                    Dual Audio
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* web series */}
          <div className="col-xs-2">
            <div className="dropdown">
              <span className="option">
                <LanguageIcon className="icons" />
                Web Series
                <ArrowDropDownIcon className="icons" />
              </span>
              <div className="dropdown_content">
                <p>
                  <Link to="#" className="cat_links">
                    Hindi Dubbed
                  </Link>
                </p>
                <p>
                  <Link to="#" className="cat_links">
                    Adult
                  </Link>
                </p>
                <p>
                  <Link to="#" className="cat_links">
                    Netflix
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* tv shows */}
          <div className="col-xs-2">
            <div className="dropdown">
              <span className="option">
                <TvIcon className="icons" />
                Tv Shows
                <ArrowDropDownIcon className="icons" />
              </span>
              <div className="dropdown_content">
                <p>
                  <Link to="#" className="cat_links">
                    Action
                  </Link>
                </p>
                <p>
                  <Link to="#" className="cat_links">
                    Adventure
                  </Link>
                </p>
                <p>
                  <Link to="#" className="cat_links">
                    Animation
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* dual audio */}
          <div className="col-xs-2">
            <div className="dropdown">
              <span className="option">
                <TranslateIcon className="icons" />
                Dual Audio
                <ArrowDropDownIcon className="icons" />
              </span>
              <div className="dropdown_content">
                <p>
                  <Link to="#" className="cat_links">
                    Movie
                  </Link>
                </p>
                <p>
                  <Link to="#" className="cat_links">
                    Series
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* year */}
          <div className="col-xs-2">
            <div className="dropdown">
              <span className="option">
                <CalendarTodayIcon className="icons" />
                Year
                <ArrowDropDownIcon className="icons" />
              </span>
              <div className="dropdown_content">
                <p>
                  <Link to="#" className="cat_links">
                    2020
                  </Link>
                </p>
                <p>
                  <Link to="#" className="cat_links">
                    2019
                  </Link>
                </p>
                <p>
                  <Link to="#" className="cat_links">
                    2018
                  </Link>
                </p>
                <p>
                  <Link to="#" className="cat_links">
                    before 2018
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* more */}
          <div className="col-xs-2 block_item">
            <div className="dropdown">
              <span className="option">
                <Link to="/" className="more_cat_links">
                  More
                  <MoreVertIcon className="icons" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catog;
