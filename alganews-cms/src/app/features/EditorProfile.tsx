import styled from "styled-components";
import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor";
import Profile from "../components/Profile";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function EditorsProfile () {
  return <EditorsProfileWrapper>
    <EditorsProfileHeader>
      <Profile editorId={1} name="Daniel Bonifacio" description="editor há 8 anos" />
    </EditorsProfileHeader>
    <EditorsProfileDetailWrapper>
    <div className='col'>
      <span>
      Lorem ipsum sollicitudin blandit nibh congue a, posuere litora nullam non ultrices quisque, mattis quisque curae sapien conubia. velit laoreet ligula habitant pulvinar netus, fermentum purus class nam id aptent, suspendisse ligula nisi litora. vulputate malesuada 
      </span>
      
        <ProgressBar title='Javascript' theme='primary' progress={80}/>
        <ProgressBar title='React' theme='primary' progress={70}/>
        <ProgressBar title='Node' theme='primary' progress={65}/>
        <ValueDescriptor color='primary' description='Palavras na semana'  value={21452} />
        <ValueDescriptor color='primary' description='Palavras no mês'  value={123.234} />
        <ValueDescriptor color='primary' description='Total de palavras'  value={12312312} />
      </div>
      <div className='col'>
        <div className='inline'>
          <FieldDescriptor field='cidade' value='Vila Velha' />
          <FieldDescriptor field='estado' value='Espirito Santo'  />
        </div>
        <FieldDescriptor field='celular' value='+5527 99900-9999' />
        <FieldDescriptor field='email' value='teste@teste.com' />
        <FieldDescriptor field='nascimento' value='31 Agosto 2013' />
        <ValueDescriptor color='primary' description='Ganhos na semana' isCurrency={true} value={545623.23} />
        <ValueDescriptor color='primary' description='Ganhos do mês' isCurrency={true} value={545623.23} />
        <ValueDescriptor color='primary' description='Ganhos no total' isCurrency={true} value={545623.23} />
      </div>
    </EditorsProfileDetailWrapper>
  </EditorsProfileWrapper>
}

const EditorsProfileWrapper = styled.div`
  display: grid;
  gap: 24px;
`

const EditorsProfileHeader = styled.div`
  display: grid;  
  gap: 24px;
`
const EditorsProfileDetailWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);    
  justify-content: initial;  
  gap: 24px;

  .col{
    display: flex;
    flex-direction: column;
    gap:12px;
    justify-content: space-between;

    .inline{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }  
`