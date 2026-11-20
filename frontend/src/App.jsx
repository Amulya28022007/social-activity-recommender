
import { useState } from "react";
import Registration from "./Registration";
import "./App.css";

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [interested, setInterested] = useState([]);

  const categories = [
    "All", "Sports", "Music", "Workshops",
    "Food", "Hangout", "Adventure",
  ];

  const activities = [
    {
      id: 1,
      title: "Badminton Buddies",
      category: "Sports",
      location: "Whitefield",
      date: "This Saturday",
      time: "5:00 PM",
      description: "Meet new people and enjoy a friendly badminton session.",
    },
    {
      id: 2,
      title: "Coffee & Conversations",
      category: "Hangout",
      location: "Brookefield",
      date: "This Sunday",
      time: "4:00 PM",
      description: "A relaxed coffee meetup to connect with new people.",
    },
    {
      id: 3,
      title: "Beginner Art Workshop",
      category: "Workshops",
      location: "Marathahalli",
      date: "Next Saturday",
      time: "11:00 AM",
      description: "Explore your creative side in a beginner-friendly session.",
    },
  ];

  const filteredActivities =
    selectedCategory === "All"
      ? activities
      : activities.filter(
          (activity) => activity.category === selectedCategory
        );

  function toggleInterested(id) {
    if (interested.includes(id)) {
      setInterested(interested.filter((item) => item !== id));
    } else {
      setInterested([...interested, id]);
    }
  }

  if (showRegistration) {
    return (
      <Registration onBack={() => setShowRegistration(false)} />
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">nearby.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#activities">Explore</a>
        </div>

        <button
          className="profile-btn"
          onClick={() => setShowRegistration(true)}
        >
          Get Started
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-tag">FIND YOUR PEOPLE, NEARBY</p>
          <h1>
            Your city.
            <br />
            Your people.
            <br />
            Your plans.
          </h1>
          <p>
            Discover activities happening around you, meet
            like-minded people, and turn free time into
            meaningful experiences.
          </p>
          <button
            className="explore-btn"
            onClick={() =>
              document.getElementById("activities").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore activities →
          </button>
          <p className="location-note">
            Discover what's happening around you.
          </p>
        </div>

        <div className="hero-visual">
          <div className="visual-circle"></div>
        </div>
      </section>

      <section className="categories-section" id="categories">
        <p className="section-tag">FIND YOUR INTEREST</p>
        <h2>What are you in the mood for?</h2>
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="activities-section" id="activities">
        <p className="section-tag">MADE FOR YOU</p>
        <h2>Explore what's happening</h2>
        <div className="activity-grid">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <div className="activity-card" key={activity.id}>
                <span className="activity-category">
                  {activity.category}
                </span>
                <h3>{activity.title}</h3>
                <p className="activity-description">
                  {activity.description}
                </p>
                <div className="activity-details">
                  <span>{activity.location}</span>
                  <span>{activity.date}</span>
                  <span>{activity.time}</span>
                </div>
                <button
                  className="interest-btn"
                  onClick={() => toggleInterested(activity.id)}
                >
                  {interested.includes(activity.id)
                    ? "Interested ✓"
                    : "I'm interested →"}
                </button>
              </div>
            ))
          ) : (
            <p>No activities available in this category yet.</p>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="logo">nearby.</div>
        <p>Find your people. Find your plans.</p>
      </footer>
    </div>
  );
}

export default App;
