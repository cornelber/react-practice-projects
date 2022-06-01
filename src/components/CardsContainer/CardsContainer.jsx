import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import CardsGrid from '../CardsGrid/CardsGrid'
import styles from './CardsContainer.module.scss'

const CardsContainer = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				<CardsGrid />
			</Container>
		</React.Fragment>
	)
}

export default CardsContainer
