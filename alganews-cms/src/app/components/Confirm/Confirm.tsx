import styled from "styled-components";
import Button from "../Button/Button";


export interface ConfirmProps {
    title?: string
    yesText?: string
    noText?: string
}

export default function Confirm(props: ConfirmProps) {
    return <ConfirmWrapper>
        <ConfirmMessages>
            <ConfirmTitle>
                {props.title || "Deseja confirmar"}                
            </ConfirmTitle>
            <ConfirmInnerContent>                
                <Button label={props.noText || "Não"} variant="danger"></Button>
                <Button label={props.yesText || "Sim"} variant="primary"></Button>
            </ConfirmInnerContent>
        </ConfirmMessages>
    </ConfirmWrapper>
}

const ConfirmWrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3F8FA;
  width: 373px;
`

export const ConfirmTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`

const ConfirmInnerContent = styled.div`
  padding:5px;
  display: flex;
  gap: 24px;
  color: #274060;
  
`

export const ConfirmMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`