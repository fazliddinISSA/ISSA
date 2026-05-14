export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1>🏅 International Student Survival Award</h1>

      <p>
        International students don’t just graduate...
        they survive.
      </p>

      <button style={{
        padding: '12px 20px',
        marginTop: '20px',
        borderRadius: '10px',
        border: 'none',
        background: 'black',
        color: 'white',
        cursor: 'pointer'
      }}>
        Submit Your Survival Story
      </button>
    </div>
  )
}
