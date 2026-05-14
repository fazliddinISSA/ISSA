export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff7cc',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '60px', marginBottom: '10px' }}>
        🏅 ISSA
      </h1>

      <p style={{ fontSize: '22px' }}>
        International Student Survival Association
      </p>

      <button style={{
        padding: '12px 20px',
        marginTop: '30px',
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
