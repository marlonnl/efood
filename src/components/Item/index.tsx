import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { open, add } from '../../store/reducers/cart'

import {
  Card,
  ItemDescription,
  ItemName,
  AddToCartBtn,
  Modal,
  ModalContent,
  ModalInfo,
  ModalBtn
} from './styles'

import closeImg from '../../assets/images/close.png'
import { Cardapio } from '../../pages/Home'

// type Props = {
//   nome: string
//   descricao: string
//   foto: string
//   id: number
//   preco: number
//   porcao: string
// }

type Props = {
  item: Cardapio
}

type ModalState = {
  visible: boolean
}

export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
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
        <ItemDescription>{item.descricao.slice(0, 180)}...</ItemDescription>
        <AddToCartBtn onClick={() => setModal({ visible: true })}>
          Adicionar ao carrinho
        </AddToCartBtn>
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
              <ModalBtn onClick={() => addToCart()}>
                Adicionar ao carrinho - {priceFormat(item.preco)}
              </ModalBtn>
            </div>
          </ModalInfo>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Item
