// Import npm package
import classNames from 'classnames/bind'
// Import Styles
import styles from './button.module.scss'

let cx = classNames.bind(styles)

const Button = ({ label, inverted }) => {
    let buttonClasses = cx({
        btn : true,
        inverted : inverted
    })
    return <button className={buttonClasses}>{label}</button>
}
export default Button;