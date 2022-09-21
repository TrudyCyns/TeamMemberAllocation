import './App.css'
import { useState } from 'react';
import Header from './Header'
import Employees from './Employees'
import Footer from './Footer'

export default function App() {

  const [selectedTeam, setTeam] = useState("TeamB")

  const [employees, setEmployees] = useState([
    { id: 1, fullName: "Jim Sechen", designation: "JS Dev", gender: "male", teamName: "TeamA" },
    { id: 2, fullName: "Jane Smith", designation: "Node Dev", gender: "female", teamName: "TeamB" },
    { id: 3, fullName: "Gail Shepherd", designation: "Java Dev", gender: "female", teamName: "TeamC" },
    { id: 4, fullName: "Jill Bailey", designation: "React Dev", gender: "female", teamName: "TeamD" },
    { id: 5, fullName: "Ben Butter", designation: "Python Dev", gender: "male", teamName: "TeamA" },
    { id: 6, fullName: "Chris Bishop", designation: "Vue Dev", gender: "male", teamName: "TeamB" },
    { id: 7, fullName: "Drew Brent", designation: "Node Dev", gender: "female", teamName: "TeamC" }])

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value)
  }

  function handleEmployeeCardClick(event) {
    // Card clicked is changed according to team selected. teamName property will be changed to selectedTeam. IF employee is member of team, there'll be a box shadow. The teamName will then change to empty and the box shadow will be removed. New array assigned to transformedEmplyees and changes state of employees Array.
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam } : employee)
    setEmployees(transformedEmployees)
  }

  return (
    <div>
      <Header />
      <Employees />
      <Footer />
    </div>
  )
}
