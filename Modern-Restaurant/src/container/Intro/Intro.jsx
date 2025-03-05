import React, { useEffect, useRef, useState } from 'react'
import { meal } from '../../constants'
import { BiPause, BiPlay } from 'react-icons/bi'
const Intro = () => {
    const [playing, setPlay] = useState(false)
    const videoRef = useRef()

    useEffect(() => {
        !playing ? videoRef.current.pause() : videoRef.current.play()
    }, [playing])

    return (
        <section className={` mb-[2rem]  mt-[62px] bg-black relative video_overlay`}>
            <video className='object-cover aspect-video'
                ref={videoRef}
                src={meal}
                type="video/mp4"
                loop
                muted
                controls={false}
            ></video>
            <div>
                <div onClick={() => setPlay(!playing)} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] translate z-10 border-[1px] border-[va(--color-golden)] w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] flex items-center justify-center rounded-full cursor-pointer'>
                    {playing ? <BiPause size={50} /> : <BiPlay size={50} />}
                </div>

            </div>
        </section>
    )
}

export default Intro
