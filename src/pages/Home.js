import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard/Dashboard'
import { Container } from '../styled/HomeStyled'

const Home = () => {
	return (
		<Container>
			<Navbar />
			<Dashboard />
		</Container>
	)
}

export default Home;