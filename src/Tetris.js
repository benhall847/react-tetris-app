import React, { Component } from "react";
import Row from "./Row";
import { Figures } from "./Figures";

export class Tetris extends Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [],
			width: 10,
			height: 15,
			gameSpeed: 1500,
			currentFigure: "",
			currentFigureId: 0,
			currentFigureType: "",
			figures: []
		};
	}
	componentDidMount() {
		this._createBoard();
		this._gameLoop();
		this._setFigures();
		window.addEventListener("keydown", this._keyHandler);
	}

	_setFigures = () => {
		this.setState({
			figures: Figures
		});
	};
	_keyHandler = e => {
		console.log(e);
		e.preventDefault();
	};
	_createBoard = () => {
		let myNewBoard = [];
		for (let y = 0; y < this.state.height; y++) {
			myNewBoard[y] = [];
			for (let x = 0; x < this.state.width; x++) {
				myNewBoard[y][x] = "";
			}
		}
		console.log(myNewBoard)
		this.setState({ board: myNewBoard });
	};
	_showBoard = () => {
		return this.state.board.map((row, i) => <Row key={i} row={row} />);
	};
	_moveFigure = () => {
		let freezeFigure = false;
		if (this.state.currentFigure) {
		} else {
			let randomFigure = this.state.figures[
				Math.floor(Math.random() * this.state.figures.length)
			];
			this.setState({
				currentFigure: randomFigure.path,
				currentFigureId: randomFigure.id,
				currentFigureType: randomFigure.type
			});
		}
	};
	_gameLoop = () => {
		setInterval(() => {
			this._moveFigure();
		}, this.state.gameSpeed);
	};

	render() {
		return (
			<div className="board">
				{this.state.board.length > 0 ? this._showBoard() : null}
			</div>
		);
	}
}

export default Tetris;
