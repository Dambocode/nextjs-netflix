// Import npm package
import classNames from 'classnames/bind'
// Import Styles
import styles from './btnui.module.scss'
// Import Nextjs Components
import Image from 'next/image'

let cx = classNames.bind(styles)

const BtnUI = ( {icon, clickHandler} ) => {
    let btnClasses = cx({
        btn_ui : true,
        menu : icon === "menu",
        search : icon === "search",
        close : icon === "close",
        play : icon === "play"
    })
    return <button className={btnClasses} onClick={clickHandler}>
        <Image
            src={`/images/icon-${icon}.svg`}
            altText={`${icon} icon`}
            width={36}
            height={36}
        />
    </button>
}

export default BtnUI