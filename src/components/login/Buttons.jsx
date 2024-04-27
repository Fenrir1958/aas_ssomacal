import Button from 'react-bootstrap/Button';
import './Button.css'

const DynamicButton = (props) => {
    const { id, componentType, className, value } = props;
    return (
        <>
            {/* <Button id={id} type={componentType} className={className}>
                {value}
            </Button>{' '} */}
        </>
    )
}

export default DynamicButton
