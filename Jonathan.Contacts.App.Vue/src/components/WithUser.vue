<template>
    <div>
        <template v-if="user === null">
            <LoginUser
                @user="user = $event"
            ></LoginUser>
        </template>
        <Contacts v-else :user="user"></Contacts>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { User } from '../api';
import LoginUser from './LoginUser.vue';
import Contacts from './Contacts.vue';

@Component({
    components: {
        LoginUser,
        Contacts,
    }
})
export default class WithUserComponent extends Vue {
    private user: User | null = null;
}
</script>