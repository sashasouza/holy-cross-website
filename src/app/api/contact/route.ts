import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log("Received data:", data);

        return NextResponse.json({ message: 'Contact form submitted successfully!' }, { status: 200 });

    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json({ error: 'Failed to process contact form.' }, { status: 500 });
    }
}