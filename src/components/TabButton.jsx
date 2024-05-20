export default function TabButton({children}) {

    function handleClick() {
        console.log('clicked')
    }

    
    return (
    <li>
        <button onClick={handleClick}>{children}</button>
    </li>
    )
}