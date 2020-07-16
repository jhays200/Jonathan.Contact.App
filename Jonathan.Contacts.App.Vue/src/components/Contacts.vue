<template>
    <div>
        <h1>Welcome {{user.email}}</h1>
        <div>Contact UI Goes Here</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { User } from '../api';

@Component
export default class ContactsComponent extends Vue {
    @Prop({ default: null }) private readonly user!: User | null;
}
</script>