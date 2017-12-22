import { h, Component } from 'preact';
import style from './style.less';

export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footer}>
				<div>Copyright &copy; 2017 By <a href="https://github.com/mazipan">Irfan Maulana</a></div>
				<div>Credit to <a href="https://github.com/mathdroid">@mathdroid</a></div>
			</footer>
		);
	}
}
