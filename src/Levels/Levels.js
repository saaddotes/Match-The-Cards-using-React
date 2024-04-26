function Levels({currentLevel, setCurrentLevel,unlockedLevles }) {
    function levelManager(level) {
        setCurrentLevel(level)
        unlockedLevles.push(level)
    }

    return (
        <div className="text-center bg-cont rounded pb-3">
            <h1 className="text-white">Select Level</h1>
            <div className="d-flex gap-3 justify-content-center">
                <button className={`btn btn-secondary ${currentLevel === 0 ? 'bg-primary' : ''} ${unlockedLevles.includes(0) ? 'text-danger' : 'disabled'}`} onClick={() => levelManager(0)}> 1 </button>
                <button className={`btn btn-secondary ${currentLevel === 1 ? 'bg-primary' : ''} ${unlockedLevles.includes(1) ? 'text-danger' : 'disabled'}`} onClick={() => levelManager(1)}> 2 </button>
                <button className={`btn btn-secondary ${currentLevel === 2 ? 'bg-primary' : ''} ${unlockedLevles.includes(2) ? 'text-danger' : 'disabled'}`} onClick={() => levelManager(2)}> 3 </button>
                <button className={`btn btn-secondary ${currentLevel === 3 ? 'bg-primary' : ''} ${unlockedLevles.includes(3) ? 'text-danger' : 'disabled'}`} onClick={() => levelManager(3)}> 4 </button>
            </div>

        </div>
    )
}

export default Levels 