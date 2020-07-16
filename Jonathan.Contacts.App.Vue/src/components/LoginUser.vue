<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h2>Please Login</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field
                    label="Email"
                    v-model="email"
                    v-on:keydown.enter="submit()"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-btn
                    color="primary"
                    v-on:click="submit()"
                    :loading="submiting"
                >Submit</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { UserClient } from '../api';

@Component
export default class LoginUser extends Vue {
    private readonly userClient = new UserClient();
    private submiting = false;
    private email = '';

    private async submit() {
        if (!this.submiting) {
            this.submiting = true;
            try {
                const user = await this.userClient.getUser(this.email);
                this.$emit('user', user);
            }
            finally {
                this.submiting = false;
            }
        }
    }
}
</script>