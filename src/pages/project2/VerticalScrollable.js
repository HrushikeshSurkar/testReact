import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'; 
import './VerticalScrollable.css'; 
import { GiTireIronCross } from "react-icons/gi";
import { FaUserCircle, FaMapMarkerAlt, FaPrayingHands, FaUser } from 'react-icons/fa';

const cardData = [
  { image: 'https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'John Doe', age: 25, occupation: 'Engineer', religion: 'Christian', community: 'North America' },
  { image: 'https://images.pexels.com/photos/26065715/pexels-photo-26065715/free-photo-of-hand-of-a-woman-holding-a-white-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Jane Smith', age: 30, occupation: 'Doctor', religion: 'Muslim', community: 'Europe' },
  { image: 'https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Alex Johnson', age: 22, occupation: 'Teacher', religion: 'Hindu', community: 'Asia' },
  { image: '', name: 'Maria Garcia', age: 27, occupation: 'Lawyer', religion: 'Catholic', community: 'South America' },
  { image: '', name: 'Samuel Lee', age: 29, occupation: 'Designer', religion: 'Buddhist', community: 'Africa' },
  { image: '', name: 'Emily Clark', age: 32, occupation: 'Architect', religion: 'Christian', community: 'Australia' }
];

const VerticalScrollable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState(cardData); // State to store filtered cards

  const handleSearch = () => {
    const filtered = cardData.filter(card =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered); // Update the state with the filtered results
  };

  const handleClear = () => {
    setSearchTerm('');
    setFilteredCards(cardData); // Reset to show all cards
  };

  return (
    <section className='vertical-scrollable container'>
      <div className="search-bar">
        <InputGroup>
          <input 
            type="text" 
            placeholder="Search for profiles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control search-input"
          />
          {searchTerm && (
            <Button variant="outline-secondary" onClick={handleClear} className="clear-button" aria-label="Clear search">
              <GiTireIronCross />
            </Button>
          )}
          <Button variant="outline-success" onClick={handleSearch} className="search-button" aria-label="Search">
            Search
          </Button>
        </InputGroup>
      </div>

      {/* Grid Layout for Cards */}
      <div className="row justify-content-center"> {/* Center the cards */}
        {filteredCards.map((card, idx) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={idx}>
            <Card className='profile-card'>
              {card.image ? (
                <Card.Img variant="top" src={card.image} alt={card.name} className="profile-image" />
              ) : (
                <div className="d-flex justify-content-center align-items-center avatar-placeholder">
                  <FaUserCircle />
                </div>
              )}
              <Card.Body className="text-left">
                <Card.Title className='card-name text-center'>{card.name}</Card.Title>
                <Card.Text>
                  <FaUser /> Age: {card.age}
                </Card.Text>
                <Card.Text>
                  <FaPrayingHands /> Religion: {card.religion}
                </Card.Text>
                <Card.Text>
                  <FaMapMarkerAlt /> Community: {card.community}
                </Card.Text>
                <Button variant="success w-100 mt-2" onClick={() => alert(`Show more details of ${card.name}`)}>Show More</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VerticalScrollable;
