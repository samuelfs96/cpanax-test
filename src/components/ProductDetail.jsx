import { Carousel, Modal } from 'flowbite-react'

const ProductDetail = ({
    show,
    onClose,
    product
}) => {
  return (
    <Modal
        show={show}
        onClose={onClose}
        size="5xl"
    >
        <Modal.Header>
            {product?.title}
        </Modal.Header>
        <Modal.Body className='bg-slate-300'>
            <div className="h-[500px]">
                {
                    product && show && (
                        <Carousel>
                            {
                                product.images.map((src, index) => (
                                    <div key={index} className='flex justify-center items-center h-full'>
                                        <img
                                            className='w-auto h-[75%] drop-shadow-xl'
                                            src={src}
                                            alt={product?.title+'-img-'+index}
                                        />
                                    </div>
                                ))
                            }
                        </Carousel>
                    )   
                }
                
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default ProductDetail