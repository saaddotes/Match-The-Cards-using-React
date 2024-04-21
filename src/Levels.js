function Levels({ setCurrentLevel }) {
    function levelManager(level) {
        setCurrentLevel(level)
    }

    return (
        <div className="text-center bg-primary rounded pb-3">
            <h1 className="text-white">Select Level</h1>
            <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-secondary" onClick={() => levelManager(0)}> 1 </button>
                <button className="btn btn-secondary" onClick={() => levelManager(1)}> 2 </button>
                <button className="btn btn-secondary" onClick={() => levelManager(2)}> 3 </button>
                <button className="btn btn-secondary" onClick={() => levelManager(3)}> 4 </button>
            </div>

        </div>
    )
}

export default Levels 