import { useEffect, useState } from 'react';
import { getAllData } from '../../lib/utils/api';
import {
	StyledCard,
	StyledCardsContainer,
	StyledImg,
	StyledTextContainer
} from './home.styles';

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	return (
		<>
			<StyledCardsContainer>
				{users.map(user => (
					<StyledCard key={user.userId}>
						<StyledImg src={user.profilePicture} alt='' />
						<StyledTextContainer>
							<span>{user.fullName}</span>
							<span>{user.email}</span>
							<span>@{user.username}</span>
							<div>
								<p>{user.active}</p>
							</div>
						</StyledTextContainer>
						<button>DETAILS</button>
					</StyledCard>
				))}
			</StyledCardsContainer>
		</>
	);
};

const getAllUsers = async setUsers => {
	const users = await getAllData(); //solicito los usarios, pero esepro a que esten disponibles
	setUsers(users);
};
export default Home;
