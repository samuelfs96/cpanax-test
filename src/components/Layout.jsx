import { Footer, Navbar } from 'flowbite-react'
import React from 'react'

const Layout = ({
    children
}) => {
  return (
    <>
        <Navbar
            fluid={false}
            rounded={false}
            className="bg-slate-50 shadow-sm"
        >
            <Navbar.Brand href="#">
                <span className="text-md">
                    Frontend Test
                </span>
            </Navbar.Brand>
        </Navbar>

            {children}

        <Footer container={true} className="bg-slate-50 shadow-sm">
            <div className="w-full text-center">
                <Footer.Copyright
                    href="#"
                    by="Frontend Test"
                    year={2022}
                />
            </div>
        </Footer>
    </>
  )
}

export default Layout