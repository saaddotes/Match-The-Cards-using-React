function Levels({setCurrentLevel}) {
    function levelManager(level) {
        setCurrentLevel(level)
    }

    return (
        <div>
            <h1>Select Level</h1>
            <button onClick={() => levelManager(0)}> 1 </button>
            <button onClick={() => levelManager(1)}> 2 </button>
            <button onClick={() => levelManager(2)}> 3 </button>
            <button onClick={() => levelManager(3)}> 4 </button>
        </div>
    )
}

export default Levels 