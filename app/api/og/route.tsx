import { ImageResponse } from 'next/og'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-.02em',
          fontWeight: 700,
          background: 'white',
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              background: '#f9a8d4',
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            abechen.net
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '20px 50px',
            margin: '0 42px',
            fontSize: 40,
            width: 'auto',
            maxWidth: 550,
            textAlign: 'center',
            backgroundColor: '#db2777',
            color: 'white',
            lineHeight: 1.4,
            borderRadius: 6,
          }}
        >
          Abe Chen&apos;s Blog
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}