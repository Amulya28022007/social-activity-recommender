
import { useState } from 'react'
import './App.css'
import Registration from './Registration'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [interested, setInterested] = useState([])
  const [showRegistration, setShowRegistration] = useState(false)

  const categories = [
    'All',
    'Sports',
    'Music',
    'Workshops',
    'Food',
    'Hangouts',
    'Adventure'
  ]

  const activities = [
    {
      id: 1,
      title: 'Badminton Buddies',
      category: 'Sports',
      location: 'Whitefield',
      time: 'Today, 5:00 PM',
      people: '8 people interested',
      emoji: '🏸'
    },
    {
      id: 2,
      title: 'Coffee & Conversations',
      category: 'Hangouts',
      location: 'Brookefield',
      time: 'Tomorrow, 4:00 PM',
      people: '5 people interested',
      emoji: '☕'
    },
    {
      id: 3,
      title: 'Beginner Art Workshop',
      category: 'Workshops',
      location: 'Marathahalli',
      time: 'Saturday, 11:00 AM',
      people: '12 people interested',
      emoji: '🎨'
    }
  ]

  const filteredActivities =
    selectedCategory === 'All'
      ? activities
      : activities.filter(
          activity => activity.category === selectedCategory
        )

  function toggleInterest(id) {
    if (interested.includes(id)) {
      setInterested(interested.filter(item => item !== id))
    } else {
      setInterested([...interested, id])
    }
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">nearby<span>.</span></div>

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

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">YOUR CITY, YOUR COMMUNITY</p>

            <h1>
              Your city.<br />
              Your people.<br />
              <span>Your plans.</span>
            </h1>

            <p className="hero-description">
              Discover exciting activities around you,
              meet like-minded people and make every
              day a little more interesting.
            </p>

            <a href="#activities" className="explore-btn">
              Explore activities →
            </a>

            <p className="location-note">
              📍 Discover what's happening around you
            </p>
          </div>

          <div className="hero-visual">
            <div className="visual-card card-one">🏸</div>
            <div className="visual-card card-two">🎸</div>
            <div className="visual-card card-three">☕</div>
            <div className="visual-center">
              <span>✦</span>
              <p>Find your<br />next plan</p>
            </div>
          </div>
        </section>

        <section className="categories section" id="categories">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND YOUR INTEREST</p>
              <h2>What are you in the mood for?</h2>
            </div>
          </div>

          <div className="category-list">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="activities section" id="activities">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HAPPENING AROUND YOU</p>
              <h2>Explore activities</h2>
            </div>
          </div>

          <div className="activity-grid">
            {filteredActivities.length > 0 ? (
              filteredActivities.map(activity => (
                <div className="activity-card" key={activity.id}>
                  <div className="activity-image">
                    {activity.emoji}
                  </div>

                  <div className="activity-info">
                    <span className="activity-category">
                      {activity.category}
                    </span>

                    <h3>{activity.title}</h3>
                    <p>📍 {activity.location}</p>
                    <p>🕒 {activity.time}</p>
                    <p>👥 {activity.people}</p>

                    <button
                      className={`join-btn ${
                        interested.includes(activity.id)
                          ? 'interested'
                          : ''
                      }`}
                      onClick={() => toggleInterest(activity.id)}
                    >
                      {interested.includes(activity.id)
                        ? 'Interested ✓'
                        : "I'm interested →"}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No activities available in this category yet.</p>
            )}
          </div>
        </section>
      </main>

      <footer>
        <div className="logo">nearby<span>.</span></div>
        <p>Find your people. Discover your city.</p>
      </footer>
      {showRegistration && (
  <Registration
    onBack={() => setShowRegistration(false)}
  />
)}
    </div>
  )
}

export default App
