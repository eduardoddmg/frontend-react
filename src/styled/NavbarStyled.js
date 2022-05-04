import styled from 'styled-components'

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

export const Nav = styled.nav`
	width: 4%;
	height: 100vh;
	position: fixed;
	background-color: #17479E;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media only screen and (max-width: 1000px)
	{
		width: 10%;
	}
`

export const NavTop = styled.img`
	width: 80%;
	margin: 2vh 0 10vh 0;
`

export const NavBottom = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`

export const ButtonIcon = styled.button`
	border: none;
	background-color: ${p => p.bcolor};
	cursor: pointer;
	width: 100%;
	padding: 1.5vh;
`

export const DashIcon = styled(DashboardOutlinedIcon)`
	font-size: 15px;
	color: white;
`

export const PeopleIcon = styled(PeopleAltOutlinedIcon)`
	font-size: 15px;
	color: white;
`

export const PeopleAddIcon = styled(PersonAddAltOutlinedIcon)`
	font-size: 15px;
	color: white;
`

export const LinkIcon = styled(AddLinkOutlinedIcon)`
	font-size: 15px;
	color: white;
`

export const TasksIcon = styled(ListAltOutlinedIcon)`
	font-size: 15px;
	color: white;
`

