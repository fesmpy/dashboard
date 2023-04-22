import React, { useState } from "react";

//components
import { App } from "./App";

// library
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

//styles
import styles from "@styles/home/home.module.css";

//images
import arrows from "@assets/images/arrow.png";
import profile from "@assets/images/profile.jpg";

//icons
import search from "@assets/icons/search.png";

// MUI Icons
import DatasetIcon from "@mui/icons-material/Dataset";
import SchoolIcon from "@mui/icons-material/School";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import SettingsIcon from "@mui/icons-material/Settings";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Home = () => {
  const [activeContainer, setActiveContainer] = useState(1);

  const handleChangeBackground = (container) => {
    setActiveContainer(container);
  };

  // Calendar data
  const [valueCalendar, setValueCalendar] = useState(new Date());

  // mode color
  const [colorMode, setColorMode] = useState(false);

  return (
    <div
      className={
        colorMode
          ? `${styles.containerHomeDark}`
          : `${styles.containerHomeLight}`
      }
    >
      <div className={styles.left}>
        <div className={styles.title}>
          <AutoAwesomeIcon fontSize='large' style={{ color: "gold" }} />
          <h2>Dashboard</h2>
        </div>
        <div className={styles.content}>
          <div
            className={`${activeContainer === 1 ? styles.active : ""} ${
              styles.items
            }`}
            onClick={() => handleChangeBackground(1)}
          >
            <DatasetIcon
              fontSize='large'
              style={
                activeContainer !== 1 ? { color: "black" } : { color: "white" }
              }
            />
            <h2>Overview</h2>
          </div>
          <div
            className={`${activeContainer === 2 ? styles.active : ""} ${
              styles.items
            }`}
            onClick={() => handleChangeBackground(2)}
          >
            <SchoolIcon
              fontSize='large'
              style={
                activeContainer !== 2 ? { color: "black" } : { color: "white" }
              }
            />
            <h2>My courses</h2>
          </div>
          <div
            className={`${activeContainer === 3 ? styles.active : ""} ${
              styles.items
            }`}
            onClick={() => handleChangeBackground(3)}
          >
            <TurnedInIcon
              fontSize='large'
              style={
                activeContainer !== 3 ? { color: "black" } : { color: "white" }
              }
            />
            <h2>Homework</h2>
          </div>
          <div
            className={`${activeContainer === 4 ? styles.active : ""} ${
              styles.items
            }`}
            onClick={() => handleChangeBackground(4)}
          >
            <SettingsIcon
              fontSize='large'
              style={
                activeContainer !== 4 ? { color: "black" } : { color: "white" }
              }
            />
            <h2>Settings</h2>
          </div>
        </div>
        <footer className={styles.footer}>
          <h2>Fabio Sosa - 2023</h2>
        </footer>
      </div>
      <div className={styles.center}>
        <div className={styles.centerTop}>
          <h2>
            Great successes are born as a simple <strong>dream</strong>
          </h2>
          <div className={styles.progress}>
            <div className={styles.title}>
              <h2>Your progress</h2>
              <div className={styles.btn}>
                <img src={arrows} alt='arrow left' />
                <img
                  src={arrows}
                  alt='arrow right'
                  className={styles.arrowReverse}
                />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.item1}>
                <AutoModeIcon fontSize='large' style={{ color: "black" }} />
                <div className={styles.percentage}>
                  <h2>85%</h2>
                  <h3>class progress</h3>
                </div>
              </div>
              <div className={styles.item2}>
                <AutoModeIcon fontSize='large' style={{ color: "black" }} />
                <div className={styles.percentage}>
                  <h2>62%</h2>
                  <h3>homework progress</h3>
                </div>
              </div>
              <div className={styles.graph}>
                <App />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.centerBottom}>
          <h2>Schedule</h2>
          <div className={styles.containerCalendar}>
            <Calendar
              onChange={setValueCalendar}
              value={valueCalendar}
              className={styles.calendarStyle}
            />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <nav className={styles.nav}>
          {!colorMode ? (
            <span onClick={() => setColorMode(!colorMode)}>
              <Brightness3Icon
                fontSize='large'
                style={{ color: "black", cursor: "pointer" }}
              />
            </span>
          ) : (
            <span onClick={() => setColorMode(!colorMode)}>
              <WbSunnyIcon
                fontSize='large'
                style={{ color: "yellow", cursor: "pointer" }}
              />
            </span>
          )}

          <img src={search} alt='Icon Search' />
          <NotificationsIcon
            fontSize='large'
            style={{ stroke: "black", strokeWidth: 1, color: "white" }}
          />
          <img
            src={profile}
            alt='Fabio Profile'
            title='Fabio Sosa'
            className={styles.iconProfileUser}
          />
        </nav>
        <div className={styles.content}>
          <h2>Home work</h2>
          <div className={styles.signatures}>
            <div className={styles.items}>
              <div className={styles.container}>
                <div>
                  <h2>
                    Product <br />
                    Analytics
                  </h2>
                </div>
                <div>
                  <h2>...</h2>
                  <span>34% / 12 tasks left</span>
                </div>
              </div>
              <progress />
            </div>
            <div className={styles.items}>
              <div className={styles.container}>
                <div>
                  <h2>
                    UX <br />
                    Writing
                  </h2>
                </div>
                <div>
                  <h2>...</h2>
                  <span>34% / 12 tasks left</span>
                </div>
              </div>
              <progress />
            </div>
            <div className={styles.items}>
              <div className={styles.container}>
                <div>
                  <h2>
                    Mobile Apps <br />
                    Design
                  </h2>
                </div>
                <div>
                  <h2>...</h2>
                  <span>34% / 12 tasks left</span>
                </div>
              </div>
              <progress />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
