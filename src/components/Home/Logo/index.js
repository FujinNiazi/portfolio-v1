import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-u.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    // gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      // .from(outlineLogoRef.current, {
      //   drawSVG: 0,
      //   duration: 20,
      // })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="Mechanical , Robotics "
      />

            <svg 
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="2088.000000pt" 
                height="2333.000000pt" 
                viewBox="0 0 2088.000000 2333.000000"
                preserveAspectRatio="xMidYMid meet"
            >

                <g 
                    className='svg-container'
                    transform="translate(0.000000,2333.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none"
                >
                    <path 
                        ref={outlineLogoRef}
                        d="M29 23301 l-24 -19 -3 -7804 c-3 -7914 -2 -8133 33 -8548 156 -1821 825 -3312 2025 -4510 1350 -1348 3125 -2125 5365 -2349 110 -11 272 -25 360 -31 88 -5 189 -12 225 -15 36 -3 228 -10 427 -15 573 -16 1199 6 1757 61 214 21 224 21 390 5 930 -91 1890 -95 2771 -10 1623 155 3014 609 4125 1347 464 308 825 611 1235 1037 1257 1305 1973 2846 2129 4585 36 399 37 574 34 8473 l-3 7774 -24 19 c-23 19 -110 19 -4701 19 l-4679 0 -20 -26 -21 -27 0 -7651 c0 -4974 -4 -7730 -10 -7876 -61 -1357 -353 -2272 -895 -2800 l-67 -65 -90 95 c-361 382 -583 814 -728 1414 -85 353 -129 649 -172 1166 -9 111 -13 1976 -18 7936 -5 7644 -5 7792 -24 7813 l-19 21 -4677 0 c-4591 0 -4678 0 -4701 -19z m3194 -8113 c2 -7474 4 -8006 20 -8188 64 -729 172 -1284 364 -1875 435 -1340 1285 -2512 2468 -3400 964 -725 2098 -1215 3435 -1485 220 -45 277 -59 250 -64 -158 -27 -1223 -38 -1630 -17 -1438 74 -2629 335 -3705 811 -1566 693 -2835 1882 -3540 3315 -453 922 -686 1899 -735 3075 -6 160 -10 2957 -10 8033 l0 7787 1540 0 1540 0 3 -7992z m6087 390 c0 -4893 4 -7681 10 -7823 43 -951 192 -1649 474 -2214 135 -273 294 -489 527 -718 380 -372 789 -580 1312 -665 177 -29 595 -31 787 -4 582 81 1025 292 1401 666 619 617 916 1575 959 3100 6 200 10 3343 10 7798 l0 7462 2975 0 2975 0 -3 -7912 c-3 -6008 -6 -7945 -15 -8048 -77 -872 -218 -1502 -488 -2186 -379 -960 -954 -1822 -1744 -2614 -1118 -1120 -2552 -1815 -4368 -2114 -1178 -195 -2635 -214 -3862 -50 -1831 244 -3321 878 -4530 1928 -170 147 -578 559 -724 731 -896 1050 -1422 2297 -1590 3765 -9 74 -24 221 -33 325 -16 178 -18 694 -20 8183 l-3 7992 2975 0 2975 0 0 -7602z m5340 140 c-1 -4365 -5 -7600 -10 -7793 -37 -1303 -260 -2173 -709 -2769 -87 -115 -283 -317 -387 -399 -397 -311 -852 -465 -1429 -484 -557 -18 -1030 124 -1444 432 l-102 76 94 98 c321 339 545 777 697 1365 91 352 144 709 192 1281 9 104 12 2111 15 7898 l3 7757 1540 0 1540 0 0 -7462z"
                    />
                </g>
            </svg>
    </div>
  )
}

export default Logo
