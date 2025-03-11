import { NextResponse } from "next/server"

export async function POST() {
    const data = {
        merchantCode: "00023051",
        password: "12345678",
    }

    try {
        const response = await fetch("https://pay.ppcbank.com.kh/security_check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        return NextResponse.json(result)
    } catch (error) {
        console.error("Error fetching data from PPC Bank:", error)
        return NextResponse.json({ error: "Failed to fetch data from PPC Bank" }, { status: 500 })
    }
}
