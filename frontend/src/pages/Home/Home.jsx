import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from '../../components/Footer/Footer'
import React from 'react'

function Home() {
  const helplineNumbers = [
    { department: 'Department A', email: 'departmenta@example.com', contactNumber: '123-456-7890' },
    { department: 'Department B', email: 'departmentb@example.com', contactNumber: '456-789-0123' },
    { department: 'Department C', email: 'departmentc@example.com', contactNumber: '789-012-3456' },
    { department: 'Department C', email: 'departmentc@example.com', contactNumber: '789-012-3456' },
    { department: 'Department C', email: 'departmentc@example.com', contactNumber: '789-012-3456' },
    { department: 'Department C', email: 'departmentc@example.com', contactNumber: '789-012-3456' },
    { department: 'Department C', email: 'departmentc@example.com', contactNumber: '789-012-3456' },
    { department: 'Department C', email: 'departmentc@example.com', contactNumber: '789-012-3456' },
    { department: 'Department C', email: 'departmentc@example.com', contactNumber: '789-012-3456' },
    { department: 'Department C', email: 'departmentc@example.com', contactNumber: '789-012-3456' },
    { department: 'Department C', email: 'departmentc@example.com', contactNumber: '789-012-3456' },
    { department: 'Department C', email: 'departmentc@example.com', contactNumber: '789-012-3456' },
    { department: 'Department C', email: 'departmentc@example.com jhsfjnfusngjjndsjfhvsdnfiovjmsfkjvkfsjnvlnfsovnslkjhfn', contactNumber: '789-012-3456' },
  ];
  return (
    <div>
        <Navbar />
        <HeroSection />
        <div className="container mx-auto my-12">
      <h1 className="text-2xl font-bold mb-4 flex justify-center">Helpline Numbers</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse mx-auto">
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
    </div>
  )
}

export default Home