import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

const Typewriter = () => {
    const {text} = useTypewriter({
        words: ['Web', 'Mobile', 'E-Commerce', 'Desktop!'],
        loop: 0 ,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
      })

  return (
    <div>
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-500 from-rose-600">{text}</span>
        <Cursor />
    </div>
  )
}

export default Typewriter