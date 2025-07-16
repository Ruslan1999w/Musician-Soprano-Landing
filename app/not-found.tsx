'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        router.push('/')
    }, [router])

    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <h1>404: Такой страницы нет</h1>
            <p>Через 3 секунды вы будете перенаправлены на главную.</p>
        </div>
    )
}