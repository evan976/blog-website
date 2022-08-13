import styled from 'styled-components'

export const TagItemWrap = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0 7px',
  borderRadius: '2px',
  color: '#fff',
  lineHeight: '20px',
  whiteSpace: 'nowrap',
  fontSize: theme.fontSizes[0],
  cursor: 'pointer'
}))

export const TagPageWrap = styled.div(({ theme }) => ({
  display: 'flex',

  '& .tag-flow-page': {
    width: '840px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    '& .header': {
      width: '100%',
      height: 200,
      borderRadius: '2px',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '10px',

      '& .background': {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme.bg.primary,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        transform: 'scale(1.05)',
        filter: 'grayscale(.3)',
        transition: 'transform .1s,filter .1s',
      },

      '&:hover .background': {
        filter: 'grayscale(0)',
        transform: 'scale(1.02)',
      },

      '&:hover .content': {
        opacity: 1,
      },

      '& .content': {
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',

        '& .title': {
          textAlign: 'center',
          marginTop: '100px',
          color: '#fff',
          fontSize: theme.fontSizes[4],
        }
      }
    }
  }
}))