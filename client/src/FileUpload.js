import React from 'react'
import axios from 'axios';
export default function FileUpload (){
	const [file, setFile] = React.useState('');
	const [fileName, setFileName] = React.useState('Choose File');
	const [uploaded, setUploaded] = React.useState({});

	const changeFiles = (fileInput) => {
		setFile(fileInput)
		setFileName(fileInput.name)
	}

	const uploadFiles = async (e) => {
		e.preventDefault()
		const formData = new FormData();
		formData.append('file', file)
		try {
			const response = axios.post('/upload', formData, {
				headers: {'Content-Type': 'multipart-form-data'}
			})
			const {fileName, filePath} = res.data
			setUploaded({fileName, filePath})	
		} catch(err) {
			console.error(err);
		}
	}


	return <>
		<form>
			<input type='file' name='fileUpload' id='fileUpload' 
				onChange={(e) => changeFiles(e.target.files[0])}/>	
			<label name='fileUpload' htmlFor='fileUpload'>{fileName}</label>
			<input type="submit" value="Upload"/>
		</form>
	</>
}
