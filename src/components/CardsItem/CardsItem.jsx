import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import styles from './CardsItem.module.scss'

export default function CardsItem(props) {
	const { projectTitle, projectDesc, imageName, demoLive, codeLive } = props
	return (
		<Card>
			<CardMedia
				component='img'
				alt={projectTitle}
				height='140'
				image={require(`../../assets/img/${imageName}`)}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{projectTitle}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{projectDesc}
				</Typography>
			</CardContent>
			<CardActions className={styles.buttons}>
				<Button size='medium' className={styles.btn}>
					<a
						href={demoLive}
						target='_blank'
						className={styles.btnDemo}
					>
						View Demo Live
					</a>
				</Button>
				<Button size='medium' className={styles.btn}>
					<a
						href={codeLive}
						target='_blank'
						className={styles.btnCode}
					>
						View Code
					</a>
				</Button>
			</CardActions>
		</Card>
	)
}
