<template>
    <q-page class="flex flex-center">
        <q-card class="q-ma-md" style="max-width: 400px">
        <q-card-section>
            <q-card class="q-pa-md">
            <q-card-section>
                <q-input v-model="name" label="Name" />
                <q-input v-model="email" label="Email" />
                <q-input v-model="phone" label="Phone" />
                <q-input v-model="address" label="Address" />
                <q-input v-model="city" label="City" />
                <q-input v-model="state" label="State" />
                <q-input v-model="zip" label="Zip" />
                <q-input v-model="country" label="Country" />
            </q-card-section>
            <q-card-actions align="right">
                <q-btn label="Submit" color="primary" />
            </q-card-actions>
            </q-card>
        </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            country: ''
        }
    }
}
</script>