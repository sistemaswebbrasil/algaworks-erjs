import React from 'react'
import styled from 'styled-components'
import Profile from '../components/Profile'

export default function EditorsList() {
  return (
    <EditorListWrapper>
        <Profile name="Adriano" description="Administrador há 10 anos                           " />
        <Profile name="Michele Cristina" description="Gerente há 5 anos" />
        <Profile name="Beatriz" description="Editor há 1 ano" />
        <Profile name="João" description="Usuário desde ontem" />
        <Profile name="Maria Darc" description="Editor desde sempre" />
    </EditorListWrapper>
  )
}

const EditorListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:24px;    
`