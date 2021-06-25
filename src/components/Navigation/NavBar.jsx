import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { useStyles } from './Navstyle';
export default function ButtonAppBar() {
	const classes = useStyles();
	let history = useHistory();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Button color="inherit" onClick={() => history.push('/')}>
						Home
					</Button>
					<Typography variant="h6" className={classes.title} />
					<Button color="inherit" onClick={() => history.push('/add-students')}>
						Add
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
