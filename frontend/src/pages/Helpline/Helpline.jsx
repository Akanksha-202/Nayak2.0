

// Helpline.js

import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Helpline = () => {
  // Sample data of helpline numbers
  const helplineNumbers = [
    { department: 'Women Helpline', email: 'womenhelpline@example.com', contactNumber: '123-456-7890' },
    { department: 'Ambulance Service', email: 'ambulanceservice@example.com', contactNumber: '456-789-0123' },
    { department: "Worker's Union", email: 'workersunion@example.com', contactNumber: '789-012-3456' },
    { department: 'Police Department', email: 'policedepartment@example.com', contactNumber: '112' },
    { department: 'Domestic Violence Hotline', email: 'dvhotline@example.com', contactNumber: '800-799-7233' },
    { department: 'Mental Health Crisis Line', email: 'mentalhealthcrisis@example.com', contactNumber: '888-555-1234' },
    { department: 'Child Abuse Helpline', email: 'childabusehelpline@example.com', contactNumber: '800-422-4453' },
    { department: 'Poison Control Center', email: 'poisoncontrol@example.com', contactNumber: '800-222-1222' },
    { department: 'Fire Department', email: 'firedepartment@example.com', contactNumber: '911' },
    { department: 'Suicide Prevention Lifeline', email: 'suicideprevention@example.com', contactNumber: '800-273-8255' },
    { department: 'Legal Aid Society', email: 'legalaid@example.com', contactNumber: '800-662-1224' },
    { department: 'Animal Control Services', email: 'animalcontrol@example.com', contactNumber: '555-555-5555' },
    { department: 'Homeless Shelter Hotline', email: 'homelesshelpline@example.com', contactNumber: '800-548-6047' },
    { department: 'Elder Abuse Hotline', email: 'elderabusehotline@example.com', contactNumber: '800-677-1116' },
    { department: 'Human Trafficking Helpline', email: 'humantrafficking@example.com', contactNumber: '888-373-7888' },
];

  return (
    <>
    <Navbar />
    <div className="container mx-auto my-12">
      <h1 className="text-2xl font-bold mb-4 flex justify-center">Helpline Numbers</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse mx-auto bg-blue-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">Department Name</th>
              <th className="border px-4 py-2">Email ID</th>
              <th className="border px-4 py-2">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {helplineNumbers.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.department}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.contactNumber}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Helpline;

