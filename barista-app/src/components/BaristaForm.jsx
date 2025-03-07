

const BaristaForm = () => {

    const onCheckAnswer = () => {
        console.log("Checking answer...")
    }

    const onNewDrink = () => {
        console.log("New drink...")
    }

    return(
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <form>

            </form>
            <button type="submit" className="button submit" onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button 
                type="new-drink-button"
                className="button submit"
                onClick={onNewDrink}
            >
                New Drink
            </button>
        </div>
    )

}

export default BaristaForm;