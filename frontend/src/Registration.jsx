
import { useState } from 'react'
import './Registration.css'

function Registration({ onBack }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [ageGroup, setAgeGroup] = useState('')
  const [availability, setAvailability] = useState('')
  const [interests, setInterests] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const interestOptions = [
    'Sports',
    'Music',
    'Workshops',
    'Food',
    'Hangouts',
    'Adventure',
    'Technology',
    'Art'
  ]

  function handleInterest(interest) {
    if (interests.includes(interest)) {
      setInterests(interests.filter(item => item !== interest))
    } else {
      setInterests([...interests, interest])
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (interests.length === 0) {
      alert('Please select at least one interest.')
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="registration-overlay">
        <div className="registration-card success-card">
          <div className="success-icon">✓</div>
          <h2>You're all set, {name}!</h2>
          <p>Your preferences have been collected successfully.</p>
          <p className="success-note">
            Next, we'll use these interests to find activities
            that match you.
          </p>
          <button className="registration-submit" onClick={onBack}>
            Back to homepage
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="registration-overlay">
      <div className="registration-card">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>

        <p className="eyebrow">LET'S GET TO KNOW YOU</p>
        <h2>Create your profile</h2>
        <p className="registration-description">
          Tell us a little about yourself so we can
          recommend activities you'll enjoy.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />

          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />

          <label>Age group</label>
          <select
            value={ageGroup}
            onChange={event => setAgeGroup(event.target.value)}
            required
          >
            <option value="">Select your age group</option>
            <option value="18-21">18–21</option>
            <option value="22-25">22–25</option>
            <option value="26-30">26–30</option>
            <option value="30+">30+</option>
          </select>

          <label>What are your interests?</label>
          <p className="field-hint">Select all that apply.</p>

          <div className="interest-options">
            {interestOptions.map(interest => (
              <button
                type="button"
                key={interest}
                className={`interest-option ${
                  interests.includes(interest) ? 'selected' : ''
                }`}
                onClick={() => handleInterest(interest)}
              >
                {interests.includes(interest) ? '✓ ' : '+ '}
                {interest}
              </button>
            ))}
          </div>

          <label>When are you usually available?</label>
          <select
            value={availability}
            onChange={event => setAvailability(event.target.value)}
            required
          >
            <option value="">Select availability</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="Both">Both weekdays and weekends</option>
          </select>

          <button type="submit" className="registration-submit">
            Create my profile →
          </button>
        </form>
      </div>
    </div>
  )
}

export default Registration
