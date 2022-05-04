import { useState } from 'react';
import { Nav, NavTop, NavBottom, ButtonIcon, DashIcon, PeopleIcon, PeopleAddIcon, LinkIcon, TasksIcon } from '../../styled/NavbarStyled'

const Navbar = () => {

	const [btn, setBtn] = useState(0);

	return (
		<>
			<Nav>
				<NavTop src={require('../../assets/logo.png')} />
				<NavBottom>
					<ButtonIcon onClick={() => setBtn(0)} bcolor={(btn === 0) ? '#508DFC' : '#17479E'}>
						<DashIcon />
					</ButtonIcon>
					<ButtonIcon onClick={() => setBtn(1)} bcolor={(btn === 1) ? '#508DFC' : '#17479E'}>
						<PeopleAddIcon />
					</ButtonIcon>
					<ButtonIcon onClick={() => setBtn(2)} bcolor={(btn === 2) ? '#508DFC' : '#17479E'}>
						<LinkIcon />
					</ButtonIcon>
					<ButtonIcon onClick={() => setBtn(3)} bcolor={(btn === 3) ? '#508DFC' : '#17479E'}>
						<PeopleIcon />
					</ButtonIcon>
					<ButtonIcon onClick={() => setBtn(4)} bcolor={(btn === 4) ? '#508DFC' : '#17479E'}>
						<TasksIcon />
					</ButtonIcon>
				</NavBottom>
			</Nav>
		</>
	)
}

export default Navbar