import { React, useState } from "react";
import "./Dashboard.scss";
import fishimg from "../Images/fishing.svg";
import johnImg from "../Images/johnStory.svg";
import journey from "../Images/journey.svg";
import day from "../Images/catchDay.svg";
import tales from "../Images/tales.svg";
import fish from "../Images/fish.svg";
import up from "../Images/UpArrow.svg";
import down from "../Images/DownArrow.svg";

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const data = [
    {
      title: "Explore Fly Fishing",
      content:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    },
    {
      title: "Fly Fishing Experiences",
      content:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    },
    {
      title: "Gear Up and Catch More",
      content:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    },
  ];
  return (
    <div className="main-dashboard">
      <div className="container">
        <div className="dashboard">
          <h1 className="name">Central Texas Fly Fishing</h1>
          <span className="description">
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </span>
          <button className="button">Get Started</button>
        </div>
        <div className="image-container">
          <img src={fishimg} alt="fishing" />
        </div>
      </div>

      <div className="container-dropdown">
        <span className="dropdown-header">Featured Options</span>
        <div className="header-name">
          <h1 onClick={() => handleToggle(1)}>
            Explore Fly Fishing
            <img src={activeIndex === 1 ? up : down} alt="" />
          </h1>
          <div className={"dropdown " + (activeIndex === 1 ? "active" : "")}>
            <img src={fish} alt="fish" />
            <div className="content-header">
              Explore Fly Fishing
              <span className="content">
                Proin nibh nisl condimentum id venenatis a condimentum vitae
                sapien. Tellus in metus vulputate eu sc
              </span>
              <button className="button">Learn More</button>
            </div>
          </div>
          <h1 onClick={() => handleToggle(2)}>
            Fly Fishing Experiences
            <img src={activeIndex === 2 ? up : down} alt="" />
          </h1>
          <div className={"dropdown " + (activeIndex === 2 ? "active" : "")}>
            <img src={fish} alt="fish" />
            <div className="content-header">
              Explore Fly Fishing
              <span className="content">
                Proin nibh nisl condimentum id venenatis a condimentum vitae
                sapien. Tellus in metus vulputate eu sc
              </span>
              <button className="button">Learn More</button>
            </div>
          </div>
          <h1 onClick={() => handleToggle(3)}>
            Gear Up and Catch More
            <img src={activeIndex === 3 ? up : down} alt="" />
          </h1>
          <div className={"dropdown " + (activeIndex === 3 ? "active" : "")}>
            <img src={fish} alt="fish" />
            <div className="content-header">
              Explore Fly Fishing
              <span className="content">
                Proin nibh nisl condimentum id venenatis a condimentum vitae
                sapien. Tellus in metus vulputate eu sc
              </span>
              <button className="button">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="third-header">Member Stories</div>
      <div className="grid-container">
        <div className="grid-item">
          <img src={johnImg} alt="John-Story" />
          <div className="description">
            <div className="item-name">John's Story</div>
            <span className="item-description">
              Non arcu risus quis varius quam quisque. Ornare suspendisse sed
              nisi lacus. Eu feugiat pretium nibh{" "}
            </span>
            <button>Read more</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={journey} alt="journey" />
          <div className="description">
            <div className="item-name">The Journey</div>
            <span className="item-description">
              Proin nibh nisl condimentum id venenatis a condimentum vitae
              sapien. Tellus in metus vulputate eu sc
            </span>
            <button>Read more</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={day} alt="day" />
          <div className="description">
            <div className="item-name">Catch Day</div>
            <span className="item-description">
              Elit pellentesque habitant morbi tristique senectus et netus et.
              In hendrerit gravida rutrum quisque
            </span>
            <button>Read more</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={tales} alt="tales" />
          <div className="description">
            <div className="item-name">Trout Tales</div>
            <span className="item-description">
              Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu
              dictum varius. Volutpat commodo sed
            </span>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
