import React, { useState } from 'react'
import axios from 'axios';
// import Message from 'Message';
// import ProgressBar from 'ProgressBar';
import './fileUpload.css'

export default function FileUpload (){
	const [file, setFile] = useState('');
	const [fileName, setFileName] = useState('Choose File');
	const [uploaded, setUploaded] = useState({});
	const [message, setMessage] = useState('');
	const [uploadPercentage, setUploadPercentage] = useState(0);

	const changeFiles = (fileInput) => {
		setFile(fileInput)
		setFileName(fileInput.name)
	}

	const uploadFiles = async (e) => {
		e.preventDefault()
		const formData = new FormData();
		formData.append('file', file)
		try {
			const response = await axios.post('http://localhost:5000/upload', formData, {
				headers: {'Content-Type': 'multipart/form-data'},
				mode: 'no-cors'
			})
			const {fileName, filePath} = response.data
			setUploaded({fileName, filePath})	
		} catch(err) {
			console.error(err);
		}
	}

	return <>
		<form onSubmit={uploadFiles}>
			<input type='file' name='fileUpload' id='fileUpload' className='inputFile' 
				onChange={(e) => changeFiles(e.target.files[0])}/>	
			<label name='fileUpload' htmlFor='fileUpload'>{fileName}</label>
			<input type="submit" value="Upload"/>
		</form>
		{uploaded ? <>
			<h3>{uploaded.fileName}</h3> 
			<img src={uploaded.filePath} alt='abc'></img>
		</> : null
		}
	</>
}

//https://www.youtube.com/watch?v=XeiOnkEI7XI
//https://www.youtube.com/watch?v=b6Oe2puTdMQ&list=WL&index=18