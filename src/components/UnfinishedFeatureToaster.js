import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UnfinishedFeatureToaster.css';

const UnfinishedFeatureToaster = () => {

    return (
        <ToastContainer enableMultiContainer containerId={'unfinished-feature'} toastClassName="unfinishedFeatureToaster"
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

export function unfinishedFeature()  {
    toast('This feature has not been implemented', {containerId: 'unfinished-feature'});
}

export default UnfinishedFeatureToaster
