import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import StudentService from '../../services/StudentService';
import { initialValues, sclasses } from '../../util/util';
import './AddStudentStyle.css';
export default function App() {
	const [ msg, setMsg ] = useState('');
	const history = useHistory();
	const [ values, setValues ] = useState(initialValues);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};
	const handleSubmit = (event) => {
		if (StudentService.validateDOB(values.dob) > 10) {
			const message = StudentService.addStudents(values);
			setMsg(message);
			history.push('/students');
			event.preventDefault();
		} else {
			setMsg('age should be above 10');
		}
	};

	return (
		<div className="form-class">
			<form onSubmit={handleSubmit}>
				<h1>Add Student</h1>
				<div className="input-w">
					<label htmlFor="your-input">Student Name</label>
					<input
						name="sName"
						placeholder="Student Name"
						type="text"
						value={values.sName}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="input-w">
					<label htmlFor="your-input">Fathers Name</label>
					<input
						name="fName"
						placeholder="Father Name"
						type="text"
						value={values.fName}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="input-w">
					<label htmlFor="your-input">DOB</label>
					<input
						name="dob"
						type="date"
						placeholder="DOB"
						value={values.dob}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="input-w">
					<label htmlFor="your-input">Address</label>
					<input
						name="address"
						placeholder="Address"
						type="text"
						value={values.address}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="input-w">
					<label htmlFor="your-input">City</label>
					<input
						name="city"
						placeholder="City"
						type="text"
						value={values.city}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="input-w">
					<label htmlFor="your-input">State</label>
					<input
						name="sState"
						placeholder="State"
						type="text"
						value={values.sState}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="input-w">
					<label htmlFor="your-input">Pin Code</label>
					<input
						name="pin"
						placeholder="Pin"
						type="text"
						pattern="[0-9]{6}"
						maxLength="6"
						value={values.pin}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="input-w">
					<label htmlFor="your-input">Phone number</label>
					<input
						type="tel"
						name="phone"
						placeholder="Enter phone number"
						pattern="^\d{10}$"
						value={values.phone}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="input-w">
					<label htmlFor="your-input">Email</label>
					<input
						name="email"
						placeholder="Emial"
						type="email"
						value={values.email}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="input-w">
					<label htmlFor="your-input">Marks</label>
					<input
						name="marks"
						placeholder="Marks"
						type="text"
						value={values.marks}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="input-w">
					<label htmlFor="your-input">Enroll Date</label>
					<input
						type="date"
						name="eDate"
						placeholder="Enroll Date"
						value={values.eDate}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="input-w">
					<label htmlFor="your-input">Select Class</label>
					<select name="sClass" value={values.sClass} onChange={handleInputChange} required>
						<option key="" />
						{sclasses.map((sclass) => <option key={sclass}>{sclass}</option>)}
					</select>
				</div>
				<div className="input-w">
					<button className="sButton">Submit</button>
					{msg}
				</div>
			</form>
		</div>
	);
}
