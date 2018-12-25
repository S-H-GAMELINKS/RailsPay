<template>
    <div class="container">
        <p><label> Name: {{$store.state.user.name}} </label></p>
        <p><label> Email: {{$store.state.user.email}} </label></p>
        <p><label> About: </label></p>
        <span v-html="$store.state.user.about"> </span>

        <router-link to="/users/mypages/edit" class="button">
            <button type="button" class="btn btn-primary">Edit</button>
        </router-link>
    </div>
</template>