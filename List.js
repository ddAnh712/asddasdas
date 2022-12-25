import { React } from "react";

const List = ({ students, onStudentClick, onStudentDelete }) => {

    return (
        <div className="col-md-8">
            <h1>List Students</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student, index) => (
                        <tr key={index} >
                            <td>{index}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                            <td>{student.gender}</td>
                            <td>
                                <label
                                    className="btn btn-warning"
                                    // handleStudentClick={handleStudentClick}
                                    onClick={() => onStudentClick(index)}
                                >
                                    {" "}
                                    Update{" "}
                                </label>
                            </td>
                            <td>
                                <label
                                    className="btn btn-danger"
                                    onClick={() => onStudentDelete(index)}
                                >
                                    {" "}
                                    Delete{" "}
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
