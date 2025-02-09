import React from 'react';
import './OurTeam.css';
import m1 from '../../img/m1.png';
import m2 from '../../img/m2.png';
import m3 from '../../img/m3.png';
import m4 from '../../img/m4.png';
import m5 from '../../img/m5.png';
import m6 from '../../img/m6.png';
const teamMembers = [
    {
      image: m1,
      name: 'Ms. Sarah Anderson',
      qualification: "Bachelor's Degree in Early Childhood Education",
      description: 'Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.',
    },
    {
      image: m2,
      name: 'Mr. David Roberts',
      qualification: "Master's Degree in Elementary Education",
      description: 'With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.',
    },
      {
      image: m3,
      name: 'Ms. Emily Hernandez',
      qualification: "Diploma in Child Psychology",
      description: 'Ms. Emily\'s expertise in child psychology enables her to understand each child\'s unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.',
    },
      {
      image: m4,
      name: 'Mr. Michael Turner',
      qualification: "Bachelor\'s Degree in Physical Education",
      description: 'Mr. Michael\'s passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.',
    },
      {
      image: m5,
      name: 'Ms. Jessica Lee',
      qualification: "Master\'s Degree in Special Education",
      description: 'Ms. Jessica\'s specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.',
    },
      {
      image: m6,
      name: 'Mr. William Parker',
      qualification: "Bachelor\'s Degree in Fine Arts",
      description: 'Mr. William\'s background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.',
    },
  ];
function OurTeam() {
  return (
    <div>
    <section className="our-team-section">
      <div className="our-team-content">
        <button className="team-button">Our Teachers With Experties</button>
        <h2>Our Team Members</h2>
        <p>At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.</p>
      </div>
    </section>
     <section className="team-members-section">
     <div className="team-members-container">
       {teamMembers.map((member, index) => (
         <div className="team-member-card" key={index}>
           <div className="member-image-container">
             <img src={member.image} alt={member.name} className="member-image" />
           </div>
           <div className="member-details">
             <h3>{member.name}</h3>
             <p className="qualification">Qualification:{member.qualification}</p>
             <p>{member.description}</p>
           </div>
         </div>
       ))}
     </div>
   </section>
   </div>
  );
}

export default OurTeam;