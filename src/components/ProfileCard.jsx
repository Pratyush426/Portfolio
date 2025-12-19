import React from 'react';

const ProfileCard = () => {
    return (
        <div className="profile-card-container">
            <div className="profile-card">
                <div className="profile-card-inner">
                    <div className="profile-card-front">
                        <div className="profile-img-container">
                            <img src="/photo.jpg" alt="Pratyush Mohanty" className="profile-card-img" />
                        </div>
                        <div className="profile-content-overlay">
                            <h2 className="profile-name">Pratyush Mohanty</h2>
                            <p className="profile-role">ECE Student • Developer</p>
                            <div className="profile-socials">
                                <span style={{ fontSize: '0.8rem', color: '#e0e0e0' }}>MSRIT, Bangalore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
