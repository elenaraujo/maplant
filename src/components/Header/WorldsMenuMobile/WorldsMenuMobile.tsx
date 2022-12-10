import { Dropdown } from '@nextui-org/react'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { useRouter } from 'next/router'
import CustomBadge from './BadgeMobile/BadgeMobile'
import * as S from './WorldsMenuMobile.style'

const WorldsMenuMobile = () => {
  const router = useRouter()
  return (
    <S.DropdownMenuWrapper>
      <Dropdown>
        <Dropdown.Button
          icon={<Menu size={'3em'} color="var(--gold)" />}
          color={'warning'}
          light
        ></Dropdown.Button>
        <Dropdown.Menu
          aria-label="Static Actions"
          disabledKeys={[
            'velen-novigrad',
            'skellige',
            'kaer-morhen',
            'toussaint'
          ]}
          onAction={(key) => router.push(`/${key}`)}
        >
          <Dropdown.Item key="white-orchard">White Orchard</Dropdown.Item>
          <Dropdown.Item
            key="velen-novigrad"
            css={{
              whiteSpace: 'nowrap',
              fontSize: 14
            }}
          >
            Velen & Novigrad
            <CustomBadge>Coming soon</CustomBadge>
          </Dropdown.Item>
          <Dropdown.Item key="skellige">
            Skellige
            <CustomBadge>Coming soon</CustomBadge>
          </Dropdown.Item>
          <Dropdown.Item key="kaer-morhen">
            Kaer Morhen
            <CustomBadge>Coming soon</CustomBadge>
          </Dropdown.Item>
          <Dropdown.Item key="toussaint">
            Toussaint
            <CustomBadge>Coming soon</CustomBadge>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </S.DropdownMenuWrapper>
  )
}

export default WorldsMenuMobile
