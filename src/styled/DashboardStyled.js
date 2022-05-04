import styled from 'styled-components'
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { Td } from '@chakra-ui/react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export const Container = styled.section`
	margin-left: 4%;
	width: 96%;
	background-color: #D4E3FF;
`

export const ContainerTop = styled.section`
	background-color: white;
	padding: 4vh 6vh;
`

export const ContainerTopSec = styled.section`
	display: flex;
	align-items: center;
`

export const IconTitulo = styled(MenuOpenOutlinedIcon)`
	font-size: 20px;
	color: #17479E;
	margin: 0 1vh;
	font-weight: bold;
`

export const ContainerTopTitulo = styled.h1`
	font-size: 25px;
	font-weight: bold;
	color: #17479E;
`

export const ContainerBottom = styled.section`
	padding: 3vh 7vh;
	display: flex;
	flex-direction: column;
	height: 85%;
`

export const ContainerBottomInfo = styled.section`
	width: 100%;
	height: 100%;
	margin-top: 6vh;
	display: flex;
	justify-content: end;
`

export const ContainerBottomInfoLeft = styled.section`
	width: 70%;
	border-radius: 12px;
	height: 50%:
	padding: 10vh;
	background-color: white;
	margin-right: 8vh;
`

export const ContainerBottomInfoRight = styled.section`
	width: 30%;
	height: 70vh;
`

export const ContainerBottomInfoRightTop = styled.section`
	width: 100%;
	border-radius: 12px;
	background-color: white;
	margin-bottom: 6vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 3vh 8vh;
`

export const ContainerBottomInfoRightTopImg = styled.img`
	width: 40%;
	margin: 0 1vh;
`

export const ContainerBottomInfoRightTopText = styled.section`
	display: flex;
	flex-direction: column;
`

export const TextTop = styled.h1`
	font-size: 30px;
	font-weight: bold;
`

export const TextBottom = styled.h1`
	font-size: 15px;
`

export const ContainerBottomInfoRightBottom = styled.section`
	width: 100%;
	height: 60%;
	border-radius: 12px;
	background-color: white;
	display: flex;
	flex-direction: column;
	padding: 4vh 7vh;
`

export const ContainerTable = styled.section`
	width: 100%;
`

export const TabelaName = styled(Td)`
	display: flex;
	align-items: center;
`

export const TabelaNameImg = styled.img`
	border-radius: 50%;
	width: 40px;
	height: 40px;
	margin: 0 1vh;
	object-fit: cover;
`

export const StarFalse = styled(StarBorderIcon)`
	font-size: 15px;
	color: black;
`

export const StarTrue = styled(StarIcon)`
	font-size: 15px;
	color: orange;
`

export const SectionBarra = styled.section`
	display: flex;
	margin: 1vh 0;
`

export const Barra = styled.section`
	width: ${p => p.width};
	background-color: ${p => p.bcolor};
	margin: 0 1vh;
`