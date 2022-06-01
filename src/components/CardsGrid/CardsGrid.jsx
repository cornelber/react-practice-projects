import * as React from 'react'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import data from '../../data'
import CardsItem from '../CardsItem/CardsItem'
import styles from './CardsGrid.module.scss'

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	boxShadow: 'none',
	color: theme.palette.text.secondary,
}))

export default function CardsGrid() {
	const [projects] = useState(data)
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid className={styles.cardsContainer} container spacing={2}>
				{projects.map(project => {
					return (
						<Grid
							key={project.id}
							item
							lg={4}
							md={4}
							sm={6}
							xs={12}
						>
							<Item className={styles.particularCardContainer}>
								<CardsItem
									projectTitle={project.projectTitle}
									projectDesc={project.projectDesc}
									imageName={project.imageName}
									demoLive={project.demoLive}
									codeLive={project.codeLive}
								/>
							</Item>
						</Grid>
					)
				})}
			</Grid>
		</Box>
	)
}
