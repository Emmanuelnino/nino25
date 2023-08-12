import React from 'react'

const sidebar = () => {
    const [toggle,setToggle] = useState(false);
    return (
        <div className='{sidebar-container'>
            <div>
                <svg
                    viewBox="0 0 24 24"
                    fill="black"
                    height="2.5em"
                    width="2.5em"
                    
                >
                    <path d="M13.939 4.939L6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z" />
                </svg>
            </div>
        </div>
    )
}

export default sidebar