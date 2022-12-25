import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
    const [students, setStudents] = useState([]);
    const [currentStudent, setCurrentStudent] = useState({});

    useEffect(() => {
        const students = JSON.parse(localStorage.getItem("key"));
        if (students) {
            setStudents(students);
        }
    }, []);

    const handleStudentClick = (index) => {
        const student = students[index];
        setCurrentStudent(student);
    };

    const handleSubmit = (studentData) => {
        const newStudentList = [...students, studentData];
        setStudents(newStudentList);
        localStorage.setItem("key", JSON.stringify(newStudentList));
    };
    
    const handleStudentDelete = (indexToDelete) => {
        const newStudentList = students.filter((student, index) => {
            if (indexToDelete !== index) return student;
        });
        setStudents(newStudentList);
        localStorage.setItem("key", JSON.stringify(newStudentList));
    };

    const handleStudentUpdate = (data) => {
        const newStudent = students.findIndex((student) => {
            if (student.name === currentStudent.name)
                return true
            return false
        })
        const newStudentList = [...students]
        newStudentList[newStudent] = data;
        setStudents(newStudentList)
        localStorage.setItem("key", JSON.stringify(newStudentList));
    }

    return (
        <div className="container">
            <div className="row">
                <Form 
                    onSubmit={handleSubmit} 
                    student={currentStudent} 
                    handleStudentUpdate={handleStudentUpdate} 
                />
                <List
                    students={students}
                    onStudentClick={handleStudentClick}
                    onStudentDelete={handleStudentDelete}
                />
            </div>
        </div>
    );
}
export default App;
