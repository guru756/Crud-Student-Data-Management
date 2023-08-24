import React, { useState } from "react";

const Home = () => {
  const [inputs, setInputs] = useState({
    rollNo:"",
    name: "",
    fName:"",
    mName:"",
    dob:"",
    email: "",
    phone:"",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        rollNo:"",
        name: "",
        fName:"",
        mName:"",
        dob:"",
        email: "",
        phone:"",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        rollNo:"",
        name: "",
        fName:"",
        mName:"",
        dob:"",
        email: "",
        phone:"",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ rollNo:tempData.rollNo,name: tempData.name,fName:tempData.fName, mName:tempData.mName,dob:tempData.dob,email: tempData.email,phone:tempData.phone });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className="app">
      <h1 className="txt">Student Data Application</h1>
      <div className="dataForm">
        <form onSubmit={handleSubmit}>
          <div className="first">
            <span className="input">
              <input name="rollNo" value={inputs.rollNo} onChange={handleChange} placeholder="Roll No" />
            </span>
            <span className="input">
              <input name="name" value={inputs.name} onChange={handleChange} placeholder="Name" />
            </span>
          </div>
          <div className="second">
            <span className="input">
              <input name="fName" value={inputs.fName} onChange={handleChange} placeholder="Father Name" />
            </span>
            <span className="input">
              <input name="mName" value={inputs.mName} onChange={handleChange} placeholder="Mother Name" />
            </span>
          </div>
          <div className="third">
            <span className="input">
              <label>Date Of Birth :</label>
              <input type="date" name="dob" value={inputs.dob} onChange={handleChange} placeholder="Date Of Birth" />
            </span>
          </div>
          <div className="fourth">
            <span className="input ">
              <input name="email" value={inputs.email} onChange={handleChange} placeholder="Email" />
            </span>
          
            <span className="input ">
              <input name="phone" value={inputs.phone} onChange={handleChange} placeholder="Phone Number" />
            </span>
          </div>
          <button type="submit" className="add">
            {editClick ? "Update" : "Add"}
          </button>
        </form>
      </div>
      <div>
        <table className="tableHead">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Date Of Birth</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="tableData">
            {tableData.map((item, i) => (
              <tr>
                <td>{item.rollNo}</td>
                <td>{item.name}</td>
                <td>{item.fName}</td>
                <td>{item.mName}</td>
                <td>{item.dob}</td>
                <td>{item.email}</td>
                <td>+91 {item.phone}</td>
                <td>
                  <button
                    onClick={() => handleEdit(i)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;