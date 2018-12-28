<template>
    <div class="container">
        <qrcode-reader @init="onInit" @decode="onDecode"></qrcode-reader>
    </div>
</template>

<script>
import { QrcodeReader } from 'vue-qrcode-reader';
import axios from 'axios';

export default {
    components: { 
        QrcodeReader 
    },
    methods: {
        async onInit (promise) {
            try {
                    await promise
                } catch (error) {
                    if (error.name === 'NotAllowedError') {
                } else if (error.name === 'NotFoundError') {
                    // no suitable camera device installed
                } else if (error.name === 'NotSupportedError') {
                    // page is not served over HTTPS (or localhost)
                } else if (error.name === 'NotReadableError') {
                    // maybe camera is already in use
                } else if (error.name === 'OverconstrainedError') {
                    // passed constraints don't match any camera. Did you requested the front camera although there is none?
                } else {
                    // browser is probably lacking features (WebRTC, Canvas)
                }
            } finally {
            }
        },
        onDecode: function(decodedString) {
            const price = decodedString;

            var result = confirm('支払いますか？');

            if(result) {
                axios.post('/api/payments', {payment: {price: price}}).then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                })
            }
            console.log(decodedString);
        }
    }
}
</script>
