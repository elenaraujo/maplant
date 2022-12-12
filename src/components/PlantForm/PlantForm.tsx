import { useState } from 'react'
import { Dropdown } from '@nextui-org/react'
import * as S from './PlantForm.style'
import ButtonsGroup, { ActionsParams } from './ButtonsGroup/ButtonsGroup'

const PlantForm = ({
  title,
  modalOpen,
  plants,
  onPressCancel,
  params
}: PlantsFormProps) => {
  const [newPlantSlug, setNewPlantSlug] = useState('arenaria')

  params.newPlantSlug = newPlantSlug

  const slugToName = new Map()

  plants.map(({ slug, plantName }) => {
    slugToName.set(slug, plantName)
  })

  return (
    <S.MyModal style={{ display: `${modalOpen ? '' : 'none'}` }}>
      <S.MyH2>{title}</S.MyH2>
      <S.OptionsWrapper>
        <Dropdown>
          <Dropdown.Button
            flat
            size="md"
            style={{
              width: 250,
              backgroundColor: 'var(--white)',
              color: 'var(--brown)',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 16
            }}
          >
            {slugToName.get(newPlantSlug)}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={newPlantSlug}
            onAction={(e) => setNewPlantSlug(e.toString())}
          >
            {plants.map(({ plantName, slug }: PlantsProps) => {
              return (
                <Dropdown.Item key={`${slug}`}>{`${plantName}`}</Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>

        <ButtonsGroup onPressCancel={onPressCancel} params={params} />
      </S.OptionsWrapper>
    </S.MyModal>
  )
}

type PlantsProps = {
  plantName: string
  slug: string
}

type PlantsFormProps = {
  title: string
  modalOpen: boolean
  onPressCancel: () => void
  plants: [PlantsProps]
  params: ActionsParams
}

export default PlantForm
