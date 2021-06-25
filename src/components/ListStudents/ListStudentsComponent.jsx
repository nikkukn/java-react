import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StudentService from '../../services/StudentService';
import Modal from '@material-ui/core/Modal';
import ReactPaginate from 'react-paginate';
import { useStyles } from './ListStudentsStyle';
import './ListStyle.css';
class ListStudentsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [],
			open: false,
			item: {},
			offset: 0,
			perPage: 5,
			currentPage: 0
		};
		this.handlePageClick = this.handlePageClick.bind(this);
	}
	handlePageClick = (e) => {
		const selectedPage = e.selected;
		const offset = selectedPage * this.state.perPage;
		this.setState(
			{
				currentPage: selectedPage,
				offset: offset
			},
			() => {
				this.receivedData();
			}
		);
	};
	componentDidMount() {
		const students = StudentService.getStudents();
		console.log(students);
		this.setState({ students: [ ...students ] }, () => this.receivedData());
	}
	receivedData() {
		const slice = this.state.students.slice(this.state.offset, this.state.offset + this.state.perPage);
		const postData = slice.map((row, id) => (
			<TableRow key={id}>
				<TableCell component="th" scope="row">
					{row.id}
				</TableCell>
				<TableCell align="right" component="th" scope="row" onClick={() => this.viewStudent(row.id, row)}>
					{row.sName}
				</TableCell>
				<TableCell align="right">{row.phone}</TableCell>
				<TableCell align="right">{row.sClass}</TableCell>
				<TableCell align="right">{row.marks}</TableCell>
				<TableCell align="right">
					<button onClick={() => this.editStudents(row.id - 1)}>Edit</button>
				</TableCell>
			</TableRow>
		));

		this.setState({
			pageCount: Math.ceil(this.state.students.length / this.state.perPage),
			postData
		});
	}
	editStudents = (id) => {
		this.props.history.push(`/update-students/${id}`);
	};

	viewStudent = (id, item) => {
		this.handleOpen();
		this.setState({ item: item });
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	handleOpen = () => {
		this.setState({ open: true });
	};
	render() {
		const { classes } = this.props;
		const { item } = this.state;
		return (
			<div>
				<Container fixed>
					<br />
					<h2>List Of Students</h2>
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>SNo.</TableCell>
									<TableCell align="right">SName</TableCell>
									<TableCell align="right">Phone</TableCell>
									<TableCell align="right">Class</TableCell>
									<TableCell align="right">Marks</TableCell>
									<TableCell align="right">Edit</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>{this.state.postData}</TableBody>
						</Table>
					</TableContainer>
					<ReactPaginate
						previousLabel={'prev'}
						nextLabel={'next'}
						breakLabel={'...'}
						breakClassName={'break-me'}
						pageCount={this.state.pageCount}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={this.handlePageClick}
						containerClassName={'pagination'}
						subContainerClassName={'pages pagination'}
						activeClassName={'active'}
					/>
					<Modal
						className={classes.modal}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						open={this.state.open}
						onClose={this.handleClose}
					>
						<div className={classes.paper}>
							<ul>
								<li>{item.sName}</li>
								<li>{item.fName}</li>
								<li>{item.phone}</li>
								<li>{item.city}</li>
							</ul>
						</div>
					</Modal>
				</Container>
			</div>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(ListStudentsComponent);
