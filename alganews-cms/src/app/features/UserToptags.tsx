import React from 'react'
import styled from 'styled-components'
import CircleChart from '../components/CircleChart'

export default function UserToptags() {
  return (
    <Wrapper>
      <CircleChart progress={80} size={88} caption={'Java'} theme={'primary'} />
      <CircleChart progress={10} size={88} caption={'PHP'} />
      <CircleChart progress={10} size={88} caption={'Delphi'} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    gap:12px;    
`