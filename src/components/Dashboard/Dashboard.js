import { useState, useEffect } from 'react'
import { Container, ContainerTop, ContainerTopTitulo, ContainerTopSec, IconTitulo, ContainerBottom, ContainerBottomInfo, ContainerBottomInfoLeft, ContainerBottomInfoRight, ContainerBottomInfoRightTop, ContainerBottomInfoRightBottom, ContainerTable, TabelaName, TabelaNameImg, ContainerBottomInfoRightTopImg, ContainerBottomInfoRightTopText, TextTop, TextBottom, StarFalse, StarTrue, SectionBarra, Barra } from '../../styled/DashboardStyled';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

const Dashboard = () => {

	const [info, setInfo] = useState(null);
	const [star, setStar] = useState([]);
	const [result, setResult] = useState(0);
	const [color, setColor] = useState('');

	useEffect(() => {
		fetch('https://apiteste.medfy.com.br/dash/prestadores?size=15&perfil_id=0&perfil_cod', {
			headers: {
				Authorization: 'Bearer bd4148f4067a9f87c3870d418672618b'
			}
		})
		.then(response => response.json())
		.then(date => setInfo(date));

		fetch('https://apiteste.medfy.com.br/dash/perfil ', {
			headers: {
				Authorization: 'Bearer bd4148f4067a9f87c3870d418672618b'
			}
		})
		.then(response => response.json())
		.then(date => setResult(date));

		if (info) for (let i of info.LISTA) 
		{
			if (i.status === 'A') setColor('#33BC6A');
			if (i.status === 'I') setColor('#F09E23');
			if (i.status === 'P') setColor('#FF4C47');
			setStar([...star, false]);
		}
	});

	const funcaoDaApi = () => {
		console.log(info)
	}

	return (
		<Container>
			<ContainerTop>
				<ContainerTopSec>
					<IconTitulo />
					<ContainerTopTitulo>Hospital Modelo</ContainerTopTitulo>
				</ContainerTopSec>
			</ContainerTop>
			<ContainerBottom>
					<ContainerTopTitulo>Corpo Clínico</ContainerTopTitulo>
					<ContainerBottomInfo>
						<ContainerBottomInfoLeft>
							<ContainerTable style={{margin: '2vh'}}>
								<TableContainer style={{margin: '2vh'}}>
								  <Table variant='simple' size="md">
								    <Thead>
								      <Tr>
								        <Th>Nome</Th>
								        <Th></Th>
								        <Th>Perfil</Th>
								        <Th>Status</Th>
								        <Th>Atualizado</Th>
								      </Tr>
								    </Thead>
								    <Tbody>
										{info && info.LISTA.map((informacao, index) => {
											return (
												<Tr key={index}>
											        <TabelaName> <TabelaNameImg src={informacao.foto} onerror={require('../../assets/404.jpg')} /> {informacao.pr_nome_cracha}  
											        </TabelaName> 
											        <Td>
											        	<button onClick={() => {
											        		star[index] = !star[index];
											        		console.log(star);
											        	}}>
											        		{star[index] ? <StarTrue /> : <StarFalse />} 
											        	</button>
											        </Td>
											        <Td>{informacao.perfil_desc}</Td>
											        <Td>
											        	{(informacao.status === 'A' && <p style={{fontWeight: 'bold', padding: '1vh 2vh', borderRadius: '5px', backgroundColor: color}}>Ativo</p>)}
											        	{(informacao.status === 'I' && <p style={{fontWeight: 'bold', padding: '1vh 2vh', borderRadius: '5px', backgroundColor: color}}>Inativo</p>)}
											        	{(informacao.status === 'P' && <p style={{fontWeight: 'bold', padding: '1vh 2vh', borderRadius: '5px', backgroundColor: color}}>Estado provisório</p>)}
											        </Td>
											        <Td>{informacao.dt_aprovacao[8]+informacao.dt_aprovacao[9]+"/"+informacao.dt_aprovacao[5]+informacao.dt_aprovacao[6]+"/"+informacao.dt_aprovacao[0]+informacao.dt_aprovacao[1]+informacao.dt_aprovacao[2]+informacao.dt_aprovacao[3]}
											        </Td>
											        <Td style={{fontWeight: 'bold'}}>...</Td>
											     </Tr>
											)
										 })}
								    </Tbody>
								  </Table>
								</TableContainer>
							</ContainerTable>
						</ContainerBottomInfoLeft>
						<ContainerBottomInfoRight>
							<ContainerBottomInfoRightTop>
								<ContainerBottomInfoRightTopText>
									<TextTop>{result.TOTAL}</TextTop>
									<TextBottom>Prestadores</TextBottom>
								</ContainerBottomInfoRightTopText>
								<ContainerBottomInfoRightTopImg src={require('../../assets/doctor.png')} /> 
							</ContainerBottomInfoRightTop>	
						</ContainerBottomInfoRight>
					</ContainerBottomInfo>
			</ContainerBottom>
		</Container>
	)
}

export default Dashboard