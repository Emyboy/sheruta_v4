import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import React from 'react'

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    size?: string;
}

export default function MobileModal({ children, isOpen, onClose, size }: Props) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={size || '3xl'} >
            <ModalOverlay />
            <ModalContent position={'absolute'} bottom={[-20, 40]}>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}