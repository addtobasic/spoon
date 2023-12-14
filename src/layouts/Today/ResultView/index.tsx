import styles from './index.module.css'
import { CaptureData } from '..'
import Icecream from '@/components/Icecream'
import stand from './stand.svg'
import Image from 'next/image'
import arrow from './arrow.svg'
import Link from 'next/link'
import { use, useRef } from 'react'

export type ResultViewProps = {
  captureData: CaptureData
}

const ResultView: React.FC<ResultViewProps> = ({ captureData }) => {
  const { flavor, colors, pattern } = captureData
  const initialTime = useRef<number>(Date.now())

  return (
    <div className={styles['container']}>
      <div className={styles['name-container']}>
        {flavor && (
          <div
            className={styles['name']}
            style={{
              animationDelay: `${Math.max(
                0,
                1600 - (Date.now() - initialTime.current)
              )}ms`,
            }}
          >
            {flavor}
          </div>
        )}
      </div>
      <div className={styles['icecream-container']}>
        <Icecream {...{ pattern, colors }} animate />
        <Image src={stand} alt="stand" className={styles['stand']} priority />
      </div>
      <Link className={styles['history-container']} href="/history">
        りれきを見る
        <Image src={arrow} alt="arrow" priority />
      </Link>
    </div>
  )
}

export default ResultView
