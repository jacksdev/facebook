import React from 'react'
import styled from 'styled-components';
import logo from './logo_fb.png'

function Header() {
		return (
			<HeaderContainer>
				<img src={logo} alt="Logo" />
			</HeaderContainer>
		)
}

export default Header


const HeaderContainer = styled.div`
	height: 65px;
	border-radius: 10px 10px 0 0;
	margin-top: 50px;
	background-color: #506ac5;
	width: 80%;
`
