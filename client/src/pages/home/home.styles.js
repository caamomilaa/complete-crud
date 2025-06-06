import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledCardsContainer = styled.div`
	padding: 1.125rem 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	padding: 1.125rem 1rem;
	border-radius: 0.5rem;
`;

const StyledImg = styled.img`
	border-radius: 50%;
	width: 128px;
	height: 128px;
`;

const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const StyledNav = styled(NavLink)`
	cursor: pointer;
	color: #c25399;
	font-size: 14px;
	padding: 4px 8px;
	border: 1px solid #c25399;
	border-radius: 4px;
`;

export {
	StyledCard,
	StyledCardsContainer,
	StyledImg,
	StyledTextContainer,
	StyledNav
};
