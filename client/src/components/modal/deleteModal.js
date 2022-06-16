const DeleteModal = ({ closeModal }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h1>Are you sure you want to delete this user?</h1>
                </div>
                <div className="body">
                    <p>You cannot undo this action!</p>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <button>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal