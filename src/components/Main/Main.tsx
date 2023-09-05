import s from './Main.module.scss'

export const Main = () => {
	return (
		<section className={s.background}>
			<div className={s.container}>
				<h1 className={s.title}>Meat <span>Chicken</span> </h1>
				<button className={s.button}>More</button>
			</div>
		</section>
	)
}