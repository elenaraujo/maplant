import { Badge } from '@nextui-org/react'

const BadgeWeb = ({ children }: { children: JSX.Element }) => (
  <Badge
    size="xs"
    disableOutline
    content="Coming soon"
    color="warning"
    css={{
      top: -6,
      right: 9,
      fontSize: 10,
      rotate: '9deg',
      whiteSpace: 'break-spaces',
      textAlign: 'center',
      lineHeight: '9px',
      width: 51,
      fontWeight: 400,
      color: 'var(--green)'
    }}
  >
    {children}
  </Badge>
)

export default BadgeWeb
