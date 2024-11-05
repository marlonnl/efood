import { useState } from 'react'
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

type Props = {
  nome: string
  descricao: string
  foto: string
  id: number
  preco: number
  porcao: string
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

const Item = ({ nome, descricao, foto, id, preco, porcao }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    visible: false
  })

  const closeModal = () => {
    setModal({
      visible: false
    })
  }

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <ItemName>{nome}</ItemName>
        <ItemDescription>{descricao}</ItemDescription>
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
            <img src={foto} alt={nome} />
            <div>
              <h3>{nome}</h3>
              <p>
                {descricao} <br /> <br /> Serve: de {porcao}
              </p>
              <ModalBtn>Adicionar ao carrinho - {priceFormat(preco)}</ModalBtn>
            </div>
          </ModalInfo>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Item
