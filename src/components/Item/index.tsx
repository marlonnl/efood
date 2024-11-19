import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { open, add } from '../../store/reducers/cart'

import {
  Card,
  ItemDescription,
  ItemName,
  Modal,
  ModalContent,
  ModalInfo
} from './styles'

import closeImg from '../../assets/images/close.png'
import Button from '../Button'
import { priceFormat } from '../../utils'

type Props = {
  item: Cardapio
}

type ModalState = {
  visible: boolean
}

const Item = ({ item }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    visible: false
  })

  const closeModal = () => {
    setModal({
      visible: false
    })
  }

  const addToCart = () => {
    // closeModal()
    dispatch(add(item))
    dispatch(open())
  }

  return (
    <>
      <Card>
        <img src={item.foto} alt={item.nome} />
        <ItemName>{item.nome}</ItemName>
        <ItemDescription>{item.descricao.slice(0, 160)}...</ItemDescription>
        <Button
          type="button"
          variant="secondary"
          title={`Adicionar ${item.nome} ao carrinho`}
          onClick={() => setModal({ visible: true })}
        >
          Adicionar ao carrinho
        </Button>
      </Card>
      <Modal className={modal.visible ? 'visible' : ''}>
        <ModalContent>
          <header>
            <img src={closeImg} alt="Fechar" onClick={() => closeModal()} />
          </header>

          <ModalInfo>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <p>
                {item.descricao} <br /> <br /> Serve: de {item.porcao}
              </p>
              <Button
                type="button"
                title={`Adicionar ${item.nome} ao carrinho`}
                variant="secondary"
                onClick={() => addToCart()}
              >
                <span>Adicionar ao carrinho - {priceFormat(item.preco)}</span>
              </Button>
            </div>
          </ModalInfo>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Item
