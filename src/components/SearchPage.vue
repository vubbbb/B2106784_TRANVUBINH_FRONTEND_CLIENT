<template>
    <div class="booklist">
      <div class="row">
        <div v-if="!searching && books.length === 0" class="text-center"><h2>Không tìm thấy sách</h2></div>
        <div class="bookcard" v-for="book in books" :key="book.id">
          <BookCard v-bind="book" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import BookCard from '../components/BookCard.vue';
  
  export default {
    components: {
      BookCard
    },
    data() {
      return {
        books: [],
        searchQuery: '',
        searching: false // Thêm biến searching
      };
    },
    async created() {
      try {
        this.searchQuery = this.$route.query.q || '';
        await this.fetchBooks();
      } catch (error) {
        console.error(error);
      }
    },
    watch: {
      '$route.query.q'(newVal) {
        this.searchQuery = newVal || '';
        this.fetchBooks();
      }
    },
    methods: {
      async fetchBooks() {
        try {
          this.searching = true; // Đánh dấu đang tìm kiếm
          const token = localStorage.getItem('token');
          const response = await axios.get(`http://localhost:3333/api/book/search?name=${this.searchQuery}`, {
            headers: {
              token: `Bearer ${token}`
            }
          });
          this.books = response.data;
        } catch (error) {
          console.error(error);
        } finally {
          this.searching = false; // Sau khi tìm kiếm xong, đặt lại giá trị của biến searching
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .book-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .search {
    background-color: #bdc2c5;
  }
  
  .bookcard {
    flex: 1 0 200px;
    margin: 5px;
    max-width: 300px;
  }
  </style>
  