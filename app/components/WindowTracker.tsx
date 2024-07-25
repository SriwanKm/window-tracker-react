'use client';

import React, { useEffect, useState } from "react"
export default function WindowTracker() {

    // let windowSize = typeof window !== 'undefined' && window.innerWidth
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    useEffect(() => {

        const watchSize = () => setWindowSize(window.innerWidth)
        window.addEventListener("resize", watchSize)

        return () => window.removeEventListener("resize", watchSize)

    }, [])
    return (
        <div>
            Window width: {windowSize}
        </div>
    )
}