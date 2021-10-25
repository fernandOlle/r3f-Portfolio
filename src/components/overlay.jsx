import '../styles.css';

const Overlay = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
      }}
    >
      <a
        href='https://pmnd.rs/'
        style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}
      >
        UFPel
        <br />
        Federal University of Pelotas
      </a>
      <div
        style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}
      >
        frolle —
      </div>
      <div
        style={{
          position: 'absolute',
          top: 40,
          right: 40,
          fontSize: '13px',
          textDecoration: 'underline',
        }}
      >
        — ¿Box?
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          right: 40,
          fontSize: '13px',
          textAlign: 'right',
        }}
      >
        10/25/2021
        <br />
        Fernando R. Ollé
      </div>
    </div>
  );
};

export default Overlay;
