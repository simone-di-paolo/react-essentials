import TabButton from "../TabButton"

// the 'menu' passed as destructured prop is he default value of the dynamic element type
export default function Tabs({ children, buttons, ButtonsContainer = 'menu'}) {
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}