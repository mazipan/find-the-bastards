import { h, Component } from 'preact';
import style from './style.less';
import axios from 'axios';
const basePath = 'https://insta-api.mustadi.com/bastards/who/dont/follow/';

export default class Home extends Component {
	state = {
		result: [],
		username: '',
		error: false
	};

	handleChangeUsername = e => {
		this.setState({
			username: e.target.value
		});
	};

	doSearchBastard = () => {
		if (this.state.username !== '') {
			axios.get(`${basePath}${this.state.username}`)
				.then(response => {
					this.setState({
						result: response.data,
						username: '',
						error: false
					});
				})
				.catch(() => {
					this.setState({
						username: '',
						error: true
					});
				});
		}
	};

	handleEnter = e => {
		if (e.keyCode !== 13) {
			return;
		}
		e.preventDefault();
		this.doSearchBastard();
	};

	renderResult = () => {
		this.state.result.map(item => {
			return (
				<div>
					{item.username}
				</div>
			);
		}, this);
	}

	render() {
		return (
			<main class={style.home}>

				<div class={style.img}>
					<img src="assets/icons/android-chrome-192x192.png" />
				</div>

				<div class={style.search}>

					<input type="text"
						placeholder="Type your username here..."
						class={style.input}
						value={this.state.username}
						onKeyDown={this.handleEnter}
						onChange={this.handleChangeUsername} />

					<button
						class={style.btn}
						onClick={this.doSearchBastard}>
						{this.props.appName}
					</button>

				</div>

				<div class={style.wrapper}>

					{this.state.error &&
						<div>
							<h2>Sorry, the server is bastard !!!</h2>
							<h5>You can try other username or another time</h5>
						</div>
					}

					{!this.state.error && this.state.result.length <= 0 &&
						<div>
							<h2>Type username in the box and let's find the bastards</h2>
						</div>
					}

					{!this.state.error && this.state.result.length > 0 &&
						this.renderResult()
					}

				</div>

			</main>
		);
	}
}