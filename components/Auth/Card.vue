<script setup lang="ts">
const authState=ref<"login"|"signup">("login")

const toggleAuthState=()=>{
    if(authState.value==="login")authState.value="signup";
    else authState.value="login"
}
</script>
<template>
    <div>
        <NCard class="card">
            <h3>{{authState}}</h3>
            <div class="input-container">
                <input placeholder="Email" />
                <input placeholder="password" />
            </div>
            <NButton>Submit</NButton>
            <p @click="toggleAuthState">{{toggleAuthState==="login"?"Dont have an account? Create one now":"Already have an Account?go ahead a login"}}</p>
        </NCard>
    </div>
</template>

<style scoped>
.card {
    padding: 1rem;
    width: 25rem;
}

.card h3 {
    font-size: 1.5rem;
    text-decoration: capitalize
}

.input-container {
    display: flex;
    flex-direction: column;
}

.input-container input {
    margin-bottom: 0.3rem;
    padding: 0.2rem;
    outline: none;
    border: 0.1rem solid rgba(0,0,0,0.1);
    border-radius: 0.2rem
}
p{
    color: blue;
    font-size: 0.5rem;
    cursor: pointer;
}
</style>