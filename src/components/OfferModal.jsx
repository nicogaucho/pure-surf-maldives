"use client";
import 'react-responsive-modal/styles.css';
import "../styles/modal-styles.css";
import { Modal } from 'react-responsive-modal';
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

export default function OfferModal() {
    const offerBtnRef = useRef(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const onOpenModal = () => setIsModalOpen(true);
    const onCloseModal = () => setIsModalOpen(false);


    function isOfferStillAvailable() {
        const today = new Date();
        const offerEnd = new Date('2024-08-15');
        return today < offerEnd;
    }

    useEffect(() => {
        if (isOfferStillAvailable())
            setIsModalOpen(true)
    }, [])


    return (<>
        <Modal open={isModalOpen} onClose={onCloseModal}>
            <h2>Exclusive offer</h2>
            <Image src="/promotion.webp" className='offer-image' alt="offer" width={523} height={653} />
            <p className='text-center mt-2' >Use coupon code <span style={{ fontWeight: 'bold' }}>&quot;pureblueopening&quot; </span><br /> to claim the offer</p>
            {/* <p>
                Only available until 20th of August 2024
            </p> */}
        </Modal>
    </>
    )
}