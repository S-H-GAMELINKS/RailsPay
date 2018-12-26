<template>
    <div class="container">
        <payjp-checkout
            :api-key="api_key"
            :client-id="client_id"
            text="add credit crad"
            submit-text="カードで支払い"
            name-placeholder="JOHN DOE"
            v-on:created="onTokenCreated"
            v-on:failed="onTokenFailed">
        </payjp-checkout>
    </div>
</template>

<script>
import PayjpCheckout from 'vue-payjp-checkout';
import axios from 'axios';

export default{
    data: function() {
        return {
            api_key: gon.PAYJP_PUBLIC_KEY,
            client_id: gon.PAYJP_PUBLIC_KEY,
        }
    },
    components: {
        PayjpCheckout
    },
    methods: {
        onTokenCreated(token) {
            this.setCreditToken(token.id);
        },
        onTokenFailed(e) {
            console.error(e);
        },
        setCreditToken: function(token) {
            axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');
            axios.defaults.headers['content-type'] = 'application/json';

            axios.post('/api/users/set_token', {token: token}).then((response) => {
                console.log(response);
                alert("Success!");
            }, (error) => {
                console.log(error);
                alert("Failed!");
            })
        }
    }
}
</script>