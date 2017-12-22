import { h, Component } from 'preact';
import style from './style.less';

export default class Home extends Component {
	render() {
		return (
			<main class={style.home}>
			
				<div class={style.img}>
					<img src="assets/icons/android-chrome-192x192.png" />
				</div>

				<div class={style.search}>
					<input type="text" class={style.input}/>
					<button class={style.btn}>{this.props.appName}</button>
				</div>

				<div class={style.wrapper}>
					Result
				</div>

			</main>
		);
	}
}