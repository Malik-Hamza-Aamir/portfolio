import "./leftbar.css";

const Leftbar = () => {
    return(
        <>
            <div className="leftbar-container">
                <ul className="line-element">
                    <li>
                        <a href="#">github</a>
                    </li>

                    <li>
                        <a href="#">linkedin</a>
                    </li>
                    
                    <li>
                        <a href="#">twitter</a>
                    </li>
                    
                    <li>
                        <a href="#">instagram</a>
                    </li>
                </ul>
            </div>
            
        </>
    );
};

export default Leftbar;