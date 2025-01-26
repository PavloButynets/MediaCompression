import { CSSProperties } from 'react';


export const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      padding: '16px'
    } as CSSProperties,
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginBottom: '24px',

      top: '0.5rem',
    },
    headerIcon: {
      fontSize: '32px',
      color: '#1E88E5' 
    },
    headerTitle: {
      fontSize: '24px',
      fontWeight: 600,
      color: '#0D47A1'
    },
    buttonWrapper: {
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
      
    } as CSSProperties,
    settingsButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
      color: 'white',
      '&:hover': {
        backgroundColor: '#1565C0' 
      }
    },
    resetButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      backgroundColor: '#BC3B3B', 
      color: 'white',
      '&:hover': {
        backgroundColor: '#CC3B3B' 
      },
    },
    uploaderWrapper: {
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: '#F5F5F5', 
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      flexDirection: 'column',

    } as CSSProperties,
    progressWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px',
      marginTop: '16px'
    },
    progressText: {
      fontSize: '14px',
      color: '#212121' 
    },
    fileSizeInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: '16px',
      fontSize: '14px',
      color: '#757575' 
    },
    convertButtonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '24px'
    },
    convertButton: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#1976D2', 
      color: 'white',
      '&:disabled': {
        backgroundColor: '#BDBDBD', 
        cursor: 'not-allowed'
      },
      '&:hover': {
        backgroundColor: '#1565C0' 
      }
    },
  }
  