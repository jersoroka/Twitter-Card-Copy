import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toaster.css';

const SuccessToaster = () => {

    return (
        <ToastContainer enableMultiContainer containerId={'success'} toastClassName="successToaster toaster"
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        closeButton={false}
    />
    )
}

export function triggerSuccessToaster(text)  {
    toast(text, {containerId: 'success'});
}

export default SuccessToaster;
