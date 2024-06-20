'use client'

import { Progress } from 'antd'

import { useReadingProgressBar } from '@/hooks/useReadingProgressBar'

export default function ReadingProgress() {
	const completion = useReadingProgressBar()
	return (
		<div className="fixed w-full top-[53px]">
			<Progress percent={completion} strokeColor="#7b87f0" showInfo={false} />
		</div>
	)
}
