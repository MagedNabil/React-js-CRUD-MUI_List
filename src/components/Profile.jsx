import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




export default function Profile() {
	return (
		<>
			<h1>Your Profile</h1>
			<Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 'auto', width: 300 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
						alt="green iguana"

					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over 6,000
							species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>

		</>
	);
}
