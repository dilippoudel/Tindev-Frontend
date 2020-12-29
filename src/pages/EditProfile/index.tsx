import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import CustomButton from '../../components/CustomButton';

import HalfCircle from '../../components/HalfCircle';

import userImg from '../../media/user-img.svg';

const EditProfile = () => {
	return (
		<div className='position-relative'>
			<HalfCircle inputText='Education & Experiences' />
			<div className='position-absolute user-img hide-sm'>
				<img src={userImg} alt='userImg-svg' />
				<br />
				<CustomButton text='Upload' className='my-2 py-2' />
			</div>

			<Form className='container my-5'>
				<Form.Group as={Row} controlId='formHorizontalTitle'>
					<Form.Label column sm='2'>
						Title
					</Form.Label>
					<Col sm='4'>
						<Form.Control type='text' placeholder='Title' />
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId='formHorizontalFName'>
					<Form.Label column sm='2'>
						First Name
					</Form.Label>
					<Col sm='4'>
						<Form.Control type='text' placeholder='First name' />
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId='formHorizontalLName'>
					<Form.Label column sm='2'>
						Last Name
					</Form.Label>
					<Col sm='4'>
						<Form.Control type='text' placeholder='Last name' />
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId='formHorizontalCountry'>
					<Form.Label column sm='2'>
						Country
					</Form.Label>
					<Col sm='4'>
						<Form.Control type='text' placeholder='Country' />
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId='formHorizontalCity'>
					<Form.Label column sm='2'>
						City
					</Form.Label>
					<Col sm='4'>
						<Form.Control type='text' placeholder='City' />
					</Col>
				</Form.Group>

				<Form.Group as={Row}>
					<Form.Label as='legend' column sm={2}>
						Relocate?
					</Form.Label>
					<Col as={Row} sm={10} className='mt-2'>
						<Form.Check
							type='radio'
							label='Yes'
							name='formVerticalRadios'
							id='formVerticalRadios1'
							checked
							className='pr-4'
						/>
						<Form.Check
							type='radio'
							label='No'
							name='formVerticalRadios'
							id='formVerticalRadios2'
						/>
					</Col>
				</Form.Group>

				<Form.Label as='legend' column sm={2} className='ml-n3'>
					Education
				</Form.Label>
				<Form.Row>
					<Col sm={6} className='p-2'>
						<Form.Control placeholder='Name of Degree' />
					</Col>
					<Col sm={6} className='p-2'>
						<Form.Control placeholder='University / School' />
					</Col>
					<Col sm={6} className='p-2'>
						<Form.Control placeholder='Name of Degree' />
					</Col>
					<Col sm={6} className='p-2'>
						<Form.Control placeholder='University / School' />
					</Col>
				</Form.Row>

				<p>+ Add more</p>
				<Form.Label as='legend' column sm={2} className='ml-n3'>
					Skills
				</Form.Label>
				<Form.Row>
					<Col className='p-2'>
						<Form.Control placeholder='skills comes in here' />
					</Col>
				</Form.Row>
				<br />
				<Form.Label as='legend' column sm={4} className='ml-n3'>
					Work Experience
				</Form.Label>
				<br />

				<Form.Label as='legend' column sm={2}>
					Level
				</Form.Label>
				<Form.Row>
					<Col sm={4} className='px-2'>
						<Form.Control placeholder='Skill level' />
					</Col>
				</Form.Row>
				<Form.Label as='legend' column sm={2}>
					Experience
				</Form.Label>
				<Form.Row>
					<Col sm={4} className='px-2'>
						<Form.Control placeholder='Duration' />
					</Col>
				</Form.Row>
				<br />
				<CustomButton text='Update' className='my-2 py-2 btn-lg' />
			</Form>
		</div>
	);
};

export default EditProfile;
