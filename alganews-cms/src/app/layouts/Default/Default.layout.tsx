import Logo from '../../components/Logo'
import NavBar from '../../components/NavBar'
import SessionController from '../../components/SessionController'
import * as DL from './Default.styles'

interface DefaultLayoutProps {
    children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps) {
    return (
        <DL.Wrapper>
            <DL.Header>
                <Logo/>
            </DL.Header>
            <DL.Main>
                <DL.Navigation><NavBar/></DL.Navigation>
                <DL.FeatureContent>
                    {props.children}
                </DL.FeatureContent>
                <DL.Aside>
                    <SessionController name="Adriano" description="Desde mês passado" />
                </DL.Aside>
            </DL.Main>
        </DL.Wrapper>
    )
}

export default DefaultLayout
