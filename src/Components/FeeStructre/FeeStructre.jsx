import React from "react";
import "./FeeStructre.css";
import Heading from '../Heading/Heading';

const FeeStructure = () => {
  const programs = [
    { program: "Nursery", age: "2 - 3 Years", tuition: "$1,686", registration: "$162", activity: "$12" },
    { program: "Pre - Kindergarten", age: "3 - 4 Years", tuition: "$2,686", registration: "$220", activity: "$16" },
    { program: "Kindergarten", age: "4 - 5 Years", tuition: "$3,686", registration: "$340", activity: "$20" },
  ];

  const additionalServices = [
    { service: "Before and After-School Care", cost: "$120 / per month" },
    { service: "Language Immersion Program", cost: "$60 / per semester" },
    { service: "Transportation (optional)", cost: "$80 / per month" },
  ];

  return (
    <div className="fee-structure-container">
      <div className="fee-wrapper">
        <button className="journey-button">Our Features</button>
        <Heading 
          title="Fee Structure" 
          description="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
        />

        <div className="fee-section">
         <table className="fee-table">
            <thead>
              <tr>
                <th>Program</th>
                <th>Age Group</th>
                <th>Annual Tuition</th>
                <th>Registration Fee</th>
                <th>Activity Fee</th>
              </tr>
            </thead>
     
          </table>
          <table className="fee-table">
            <tbody>
              {programs.map((item, index) => (
                <tr key={index}>
                  <td>{item.program}</td>
                  <td>{item.age}</td>
                  <td>{item.tuition}</td>
                  <td>{item.registration}</td>
                  <td>{item.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="fee-section">
          <h3 className="section-title">Additional Services</h3>
          <table className="fee-table">
         
            <tbody>
              {additionalServices.map((service, index) => (
                <tr key={index}>
                  <td>{service.service}</td>
                  <td>{service.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;