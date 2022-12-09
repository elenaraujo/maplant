import { Button } from '@nextui-org/react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Container = styled.div`
  padding: 10px;
`

export const ImgWrapper = styled.div`
  margin-right: 10px;
`

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 15px;
  justify-content: end;
  gap: 8px;
`

export const IconWrapper = styled.a`
  color: var(--gray);
  width: 15px;
  height: 15px;
  display: flex;
`

export const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PlantName = styled.p`
  margin: 0px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
`

export const PlantLink = styled.a`
  color: var(--gray);
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
`

export const StyledButton = {
  width: 'fit-content',
  minWidth: 'fit-content',
  height: 15,
  padding: 0,
  backgroundColor: 'transparent',
  borderRadius: 0
}
