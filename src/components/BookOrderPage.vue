<template>
    <q-card class="my-card" flat bordered>
        <q-card-section horizontal class="order-card">
            <q-img class="col-5 image" :src="books.image" />

            <q-card-section class="product-info">
                <div class="product-details">
                    <h4>{{ books.name }}</h4>
                    <h6>Tác giả: {{ books.author }}</h6>
                    <h5>Giá thuê: {{ books.cost }}đ</h5>
                    <h5>Còn {{ books.quantity }} quyển khả dụng</h5>
                </div>

                <div class="action-buttons">
                    <q-input outlined v-model="quantity" type="number" label="Chọn số lượng" />
                    <q-btn color="primary" label="Mượn sách" @click="rentBook" />
                </div>
            </q-card-section>
        </q-card-section>
    </q-card>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            books: [],
            quantity: 1 // Default quantity is 1
        };
    },
    async created() {
        try {
            const token = localStorage.getItem('token');
            const bookId = this.$route.path.split('/').pop();
            const response = await axios.get('http://localhost:3333/api/book/' + bookId, {
                headers: {
                    token: `Bearer ${token}`
                }
            });
            console.log(response.data);
            this.books = response.data;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        async rentBook() {
            try {
                const token = localStorage.getItem('token');
                const bookId = this.$route.path.split('/').pop();
                const response = await axios.post('http://localhost:3333/api/order', {
                    token,
                    bookId,
                    quantity: this.quantity
                }, {
                    headers: {
                        token: `Bearer ${token}`
                    }
                });
                // Xử lý kết quả sau khi mượn sách thành công (nếu cần)
            } catch (error) {
                console.error('Error renting book:', error);
                // Xử lý lỗi nếu cần
            }
        }
    }
}
</script>


<style scoped>
.order-card {
    display: flex;
    align-items: center;
    height: 40rem;
}

.image {
    height: 100%;
    width: 25rem;
    /* max-width: 100%; 
    max-height: 100%;  */
}

.product-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-details {
    margin-bottom: 2rem;
}

.action-buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
}
</style>