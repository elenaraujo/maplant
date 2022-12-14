import { useState } from 'react'
import { Dropdown } from '@nextui-org/react'
import * as S from './PlantForm.style'
import ButtonsGroup, { ActionsParams } from './ButtonsGroup/ButtonsGroup'
import { useWidth } from 'utils/hooks'

const PlantForm = ({
  title,
  modalOpen,
  plants,
  onPressCancel,
  params
}: PlantsFormProps) => {
  const [newPlantSlug, setNewPlantSlug] = useState('arenaria')
  const { windowWidth } = useWidth()

  params.newPlantSlug = newPlantSlug

  const slugToName = new Map()

  plants.map(({ slug, plantName }) => {
    slugToName.set(slug, plantName)
  })

  const message =
    params.OPERATION === 'add'
      ? 'Click where you want to insert a pin on the map'
      : 'Choose a new plant for this marker'

  const isUpdate = params.OPERATION === 'update'

  return (
    <S.MyModal
      isUpdate={isUpdate}
      style={{ display: `${modalOpen ? '' : 'none'}` }}
    >
      <S.Div>
        <S.MyH2>{title}</S.MyH2>
        <S.P>{message}</S.P>
      </S.Div>
      <S.OptionsWrapper>
        <Dropdown>
          <Dropdown.Button
            flat
            size="md"
            style={{
              width: windowWidth < 639 ? 200 : 250,
              backgroundColor:
                windowWidth < 639 ? 'var(--background)' : 'var(--white)',
              color: 'var(--brown)',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: windowWidth < 639 ? 14 : 16
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
