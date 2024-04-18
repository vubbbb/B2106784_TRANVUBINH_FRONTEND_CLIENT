<template>
    <div class="user-profile">
        <div class="profile-header">
            <h1>{{ users.firstName }} {{ users.lastName }}</h1>
        </div>
        <div class="profile-details">
            <div class="detail-row">
                <p class="detail-label">Ngày sinh:</p>
                <p class="detail-value">{{ users.birthDay }}</p>
            </div>
            <div class="detail-row">
                <p class="detail-label">Giới tính:</p>
                <p class="detail-value">{{ users.gender }}</p>
            </div>
            <div class="detail-row">
                <p class="detail-label">Địa chỉ:</p>
                <p class="detail-value">{{ users.address }}</p>
            </div>
            <div class="detail-row">
                <p class="detail-label">Email:</p>
                <p class="detail-value">{{ users.email }}</p>
            </div>
            <div class="detail-row">
                <p class="detail-label">Số điện thoại:</p>
                <p class="detail-value">{{ users.phoneNumber }}</p>
            </div>
            <div class="detail-row">
                <p class="detail-label">Ngày tạo:</p>
                <p class="detail-value">{{ users.created }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: []
        };
    },
    async created() {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3333/api/user/info', {
                headers: {
                    token: `Bearer ${token}`
                }
            });
            this.users = response.data;
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
};
</script>

<style scoped>
.user-profile {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.profile-header {
    text-align: center;
    margin-bottom: 20px;
}

.profile-details {
    padding: 10px 0;
}

.detail-row {
    display: flex;
    margin-bottom: 10px;
}

.detail-label {
    flex: 1;
    font-weight: bold;
}

.detail-value {
    flex: 3;
}
</style>