import { NextResponse } from "next/server"

export async function POST() {
    try {
        const body = await request.json()

        const response = await fetch("https://pay.ppcbank.com.kh/security_check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                merchantCode: '00023051',
                password: '12345678',
            }),
        })

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`)
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error("Error fetching data:", error)
        return NextResponse.json({ error: "Failed to fetch data from PPCBank API" }, { status: 500 })
    }
}
