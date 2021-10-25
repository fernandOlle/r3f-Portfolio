import '../styles.css';

const Overlay = () => {
  const windowWidth = window.innerWidth <= 900 ? false : true;
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
        {windowWidth && 'Federal University of Pelotas'}
      </a>
      <div
        style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}
      >
        frolle —
        <br />
      </div>
      {!windowWidth && (
        <p
          style={{
            position: 'absolute',
            top: 150,
            left: 40,
            fontSize: '20px',
            color: '#83818c',
            fontWeight: '900',
          }}
        >
          Prefer a Computer <br />
          to access this page!
        </p>
      )}

      <div
        style={{
          position: 'absolute',
          top: 40,
          right: 40,
          fontSize: '13px',
          textAlign: 'right',
        }}
      >
        — ¿A Box?
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
