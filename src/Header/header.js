import './header.css'

export default function Header() {
    return(
        <>
            <nav className='nav'>
                <ul className='ul'>
                    <li className='li'>Home</li>
                    <li className='li'>Gallery</li>
                    <li className='li'>Shop</li>
                    <li className='li'>About</li>
                </ul>
            </nav>
            <script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
            <spline-viewer class='mod' url="https://prod.spline.design/fJ2ptJKzT-sDkpfO/scene.splinecode" background="rgb(6, 40, 61)">
                
            </spline-viewer>
            
            
            </>
    )
}