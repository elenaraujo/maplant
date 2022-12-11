import { Badge } from '@nextui-org/react'

const BadgeMobile = ({ children }: { children: string }) => (
  <Badge
    disableOutline
    size="xs"
    variant={'flat'}
    style={{
      backgroundColor: 'var(--gold)',
      color: 'var(--white)',
      marginLeft: 5
    }}
  >
    {children}
  </Badge>
)

export default BadgeMobile
