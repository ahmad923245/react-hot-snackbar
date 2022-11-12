import './styles.module.css'


export const Snackbar = ({
    isActive,
    message,
    type
}) => {


    return (<>
        <div
            style={{
                backgroundColor: type == 'danger' ? 'red' : type == 'warning' ? 'yellow' : type == 'info' ? 'cyan' : type == 'success' ? 'green' : '#333'
            }}
            className={isActive ? 'snackbar fadeIn' : 'snackbar fadeOut'}
        >
            {message}

            {/* <div onClick={hide}>X</div> */}
        </div>
    </>)
}