import { useEffect } from 'react'
import reset from './resetScroll'

/**
 * hook实现滚动条复位
 * @param {*} pathname 
 */
export default function useScroll(pathname) {
    useEffect(reset, [pathname])
}