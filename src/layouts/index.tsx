import { Header } from '@/components'
import { useAppStore } from '@/store'
import { ThemeProvider, setupStyled } from 'antd-style'
import 'antd/dist/reset.css'
import styled, { ThemeContext } from 'styled-components'
import { Outlet } from 'umi'
import { shallow } from 'zustand/shallow'
import GlobalStyle from './GlobalStyle'

/******************************************************
 *********************** Style *************************
 ******************************************************/

const View = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
`

const Content = styled.div`
  width: 100vw;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`

/******************************************************
 ************************* Dom *************************
 ******************************************************/

const Layout: React.FC = () => {
  const [themeMode] = useAppStore((st) => [st.themeMode], shallow)
  setupStyled({ ThemeContext })
  return (
    <ThemeProvider themeMode={themeMode}>
      <GlobalStyle />
      <View>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </View>
    </ThemeProvider>
  )
}

export default Layout
