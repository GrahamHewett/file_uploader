import React from 'react'
import PropTypes from 'prop-types'

function ProgressBar({percentage}) {
	return (
		<>
		<div className='progress' role='progressbar'
			style={{width: `${percentage}%`}}>
		</div>
		<p>{percentage}%</p>
		</>
	)
}

ProgressBar.propTypes = {

}

export default ProgressBar