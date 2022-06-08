import Box from '@mui/material/Box'

type ContentContainerProps = {
  children: any
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <Box sx={{padding: 2}}>
      {children}
    </Box>
  )
}
