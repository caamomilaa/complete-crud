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

export { StyledCard, StyledCardsContainer, StyledImg, StyledTextContainer };
