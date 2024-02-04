import styled from 'styled-components'

export const BgCon = styled.div`
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Card = styled.div`
  width: 80%;
  height: 80%;
  background-color: #1b1c22;
  display: flex;
  border-radius: 10px;
  padding: 15px;
`
export const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 45%;
  background-color: transparent;
  align-items: center;
`
export const MainHead = styled.h1`
  margin-bottom: 45px;
  font-size: 28px;
  color: #f8fafc;
  font-weight: 600;
`
export const Img = styled.img`
  width: 70%;
  background-size: cover;
  height: 70%;
`
export const Card2 = styled.div`
  background-color: #25262c;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 55%;
  border: 1px solid #334155;
`
export const StyleCard = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`
export const ListItem = styled.li`
  margin: 15px;
`
export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
`
export const HorizantalLine = styled.hr`
  border: 1px solid #334155;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  line-height: 1.5;
  padding: 20px;
  color: #f1f5f9;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderLine ? 'underline' : 'normal')};
`
