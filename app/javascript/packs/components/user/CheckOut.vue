<template>
    <div class="container">
        <payjp-checkout
            :api-key="public_key"
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
import $ from 'jquery'

export default{
    data: function() {
        return {
            public_key: String(gon.payjp_public_key),
            client_id: String(gon.payjp_client_id)
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

            axios.post('/api/users/set_token', {user: {token: token}}).then((response) => {
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