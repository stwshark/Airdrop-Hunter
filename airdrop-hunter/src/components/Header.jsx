import React, { useEffect, useState, useRef } from 'react'
import { Web3Button  } from "@web3modal/react"
import style from './componentsStyles/header.module.css'
import svgData from '../Svg.json'
import SvgIcon from './SvgIcon'
import DepositModal from './DepositModal'
import SupportModal from './SupportModal'
export default function ({open, onClose}) {
    const [isMenu, setMenu] = useState(false)
    const [isInfoModal, setInfoModal] = useState(false)
    const [isSupportModal, setSupportModal] = useState(false)
    const toggleMenu = ()=>{
        isMenu ? setMenu(false) : setMenu(true)
    }
    let menuRef = useRef()
    useEffect(()=>{
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setMenu(false)
            }
        }
        document.addEventListener("mousedown", handler)
    })
  return (
    <div className={style.header}>
        {/*<DepositModal open={isInfoModal} onClose={()=>setInfoModal(false)}/>*/}
        <SupportModal open={isSupportModal} onClose={()=>setSupportModal(false)}/>
        <div className={style.beta_text}>This project is beta. DYOR</div>
        <div className={style.header_inner}>
            <div className={style.header_title}>
                <h3 className={style.header_title_text}>AIRDROP</h3 >
                <h3 className={style.header_title_text} style={{color:"#23ACDE"}}>HUNTER</h3 >
            </div>
            <div className={style.header_info}>
                {/*<button onClick={()=>setInfoModal(true)} className={style.deposit_btn}>Deposit</button>*/}
                <div className={style.connect_button_wrapper}>
                    <Web3Button />
                </div>
                <div ref={menuRef} className={style.menu_wrapper}>
                    <div  onClick={()=>toggleMenu()} className={style.menu}>
                        <div className={style.menu_decoration_item}/>
                        <div className={style.menu_decoration_item}/>
                        <div className={style.menu_decoration_item}/>
                    </div>
                    {isMenu?
                    <div className={style.pop_menu}>
                        <a className={style.menu_link} href="">
                            Refferal
                            <SvgIcon path={svgData[0].path} xmlns={svgData[0].xmlns}/>
                        </a>
                        <a className={style.menu_link} target='_blank' href="https://airdrop-hunter.site">
                            About
                            <SvgIcon path={svgData[1].path} xmlns={svgData[1].xmlns}/>
                        </a>
                        <a className={style.menu_link} href="">
                            Theme
                            <SvgIcon path={svgData[2].path} xmlns={svgData[2].xmlns}/>
                        </a>
                        <a className={style.menu_link} target='_blank' href="https://twitter.com/AirHunter_Drop">
                            Twitter
                            <SvgIcon path={svgData[3].path} xmlns={svgData[3].xmlns}/>
                        </a>
                        <a className={style.menu_link} target='_blank' href="https://t.me/airdrop_hunter_bot">
                            Telegram
                            <SvgIcon path={svgData[4].path} xmlns={svgData[4].xmlns}/>
                        </a>
                        <p className={style.menu_link} onClick={()=>{setSupportModal(true);setMenu(false)}}>
                            Support
                            <SvgIcon path={svgData[5].path} xmlns={svgData[5].xmlns}/>
                        </p>
                        <a className={style.menu_link} href="">
                            ChangeLog
                            <SvgIcon path={svgData[5].path} xmlns={svgData[5].xmlns}/>
                        </a>
                    </div>
                    :
                    <div className={style.pop_menu_hidden}></div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
