import React from 'react'
import styled from 'styled-components'
import { IPages } from '../../types/pages-type';
import { TextDrop } from '../global/text-drop';
import { SlideContainer, Welcome } from '../../styles/global-components';
import { StyledStartPage } from '../start-page/start-page';

const StyledSettingPage = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.secondColor};
  z-index: 2;
`
const Body = styled(StyledStartPage)` 
`
const MyWelcome = styled(Welcome)` 
  &>span
  {
    letter-spacing: 3px;
    color: ${({ theme }) => theme.colors.secondTextColor};
  }
`

export const SettingPage: React.FC<IPages> = ({ setPage, page }) => {
  let className: string = page > 1 ? "left" : page !== 1 ? "right" : "middle";

  return (
    <SlideContainer className={className}>
      <StyledSettingPage>
        <Body>
          <MyWelcome>
            <TextDrop start={page === 1} string='Settings' delay={0.1} startDelay={0} />
          </MyWelcome>
        </Body>
      </StyledSettingPage>
    </SlideContainer>
  )
}
